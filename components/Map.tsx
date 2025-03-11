import React, { useMemo, useState, useRef } from 'react';
import styles from './Map.module.css'

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import icon from '../public/marker-icon.png'; // Importe a imagem
import icon2 from '../public/marker-icon-alt.png'; // Importe a imagem
import L, { LatLngTuple } from 'leaflet'; // Importe LatLngTuple de leaflet

import 'leaflet/dist/leaflet.css';

import 'leaflet/dist/leaflet.css'; // Importe os estilos do Leaflet

export default function Map() {
    const position: LatLngTuple = [-23.53043099873096, -46.72610638721699]; // Declaração de tipo aqui
    const mapRef = useRef<MapContainer>(null); // Referência ao MapContainer

    const iconOne = useMemo(() => {
        return L.icon({
            iconUrl: icon.src, // Use .src para obter o caminho correto
            iconSize: [16, 32],
            iconAnchor: [16, 32],
        });
    }, []);
    
    const iconTwo = useMemo(() => {
        return L.icon({
            iconUrl: icon2.src, // Use .src para obter o caminho correto
            iconSize: [16, 32],
            iconAnchor: [16, 32],
        });
    }, []);
    const [endereco, setEndereco] = useState('');
    const [coordenadas, setCoordenadas] = useState<[number, number] | null>(null); // Defina o tipo do estado

    const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndereco(e.target.value);
    };

    const buscarCoordenadas = async () => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`);
            const data = await response.json();
            const { lat, lon } = data[0];
            setCoordenadas([Number(lat), Number(lon)]);

            // Atualiza o zoom e o centro do mapa
            if (mapRef.current) {
                mapRef.current.setView(position, 12); // Define o zoom desejado (15 no exemplo)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <MapContainer ref={mapRef} center={position} zoom={10} style={{ height: '500px', width: '100%', zIndex: 0 }}>
                <Circle center={position} radius={10000} />

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={iconOne}>
                    <Popup>
                        Um marcador simples.
                    </Popup>
                </Marker>
                {coordenadas && (
                    <Marker position={coordenadas} icon={iconTwo} zIndexOffset={1000}>
                        <Popup>
                            {endereco}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
            <div className={styles.searchContainer}>
                <input
     
                    type="text"
                    placeholder="Nome da rua / CEP"
                    value={endereco}
                    onChange={handleEnderecoChange}
                />
                <button  onClick={buscarCoordenadas}>Buscar Coordenadas</button>

            </div>

        </>
    )
}
