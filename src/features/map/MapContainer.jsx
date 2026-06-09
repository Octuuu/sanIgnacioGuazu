import { useState } from 'react'
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { mapMarkers } from './MapMarkersData'
import { MapPin, Navigation, ArrowRight } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// Marcador minimalista personalizado utilizando Tailwind puro convertido a HTML
const createCustomIcon = (category) => {
  const colorClass = category === 'Tañarandy' ? 'bg-amber-800' : category === 'Museos' ? 'bg-stone-800' : 'bg-amber-900';
  
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `<div class="flex items-center justify-center w-8 h-8 rounded-full ${colorClass} text-white shadow-md border-2 border-white transition-transform duration-200 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

// Sub-componente interno para manejar los saltos suaves de cámara en el mapa
const RecenterMap = ({ coordinates }) => {
  const map = useMap();
  if (coordinates) {
    map.setView(coordinates, 16, { animate: true, duration: 1.5 });
  }
  return null;
};

const MapContainerComponent = () => {
  const center = [-26.880, -56.978]; // Centro óptimo equilibrado urbano-rural
  const [activeCoords, setActiveCoords] = useState(null);

  return (
    <div className="w-full flex flex-col md:flex-row border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm h-[600px]">
      
      {/* Panel Lateral de Exploración */}
      <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-stone-200 flex flex-col h-48 md:h-full bg-stone-50/50">
        <div className="p-4 border-b border-stone-200/80 bg-white">
          <h3 className="font-serif text-base text-stone-900 font-medium tracking-wide">Puntos Clave</h3>
          <p className="text-[11px] text-stone-400 font-mono tracking-wider uppercase mt-0.5">San Ignacio Guazú</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {mapMarkers.map((marker) => (
            <button
              key={marker.id}
              onClick={() => setActiveCoords(marker.coordinates)}
              className="w-full text-left p-3 rounded-xl bg-white border border-stone-200/60 transition-all duration-200 hover:border-amber-800/40 hover:bg-stone-50 flex items-start space-x-3 group focus:outline-none"
            >
              <div className="mt-0.5 text-stone-400 group-hover:text-amber-800 transition-colors">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm text-stone-900 font-normal leading-tight tracking-wide truncate">
                  {marker.name}
                </h4>
                <p className="text-[11px] font-mono tracking-wider uppercase text-stone-400 mt-0.5">
                  {marker.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Visor Cartográfico */}
      <div className="flex-1 h-full relative z-10">
        <LeafletMap
          center={center}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
        >
          {/* Capa de mapa limpia sin ruido visual */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          
          <RecenterMap coordinates={activeCoords} />
          
          {mapMarkers.map((marker) => (
            <Marker 
              key={marker.id} 
              position={marker.coordinates}
              icon={createCustomIcon(marker.category)}
            >
              <Popup maxWidth={280} className="custom-tailwind-popup">
                <div className="p-2 font-sans">
                  <span className="text-[10px] font-mono tracking-widest text-amber-800 font-semibold block uppercase mb-1">
                    {marker.category}
                  </span>
                  <h3 className="font-serif text-base text-stone-900 font-normal leading-snug mb-1.5 tracking-wide">
                    {marker.name}
                  </h3>
                  <p className="text-stone-500 font-light text-xs leading-relaxed mb-3">
                    {marker.description}
                  </p>
                  
                  <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-light truncate max-w-[140px]">
                      {marker.address}
                    </span>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${marker.coordinates[0]},${marker.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 font-mono text-[11px] text-amber-900 font-semibold hover:text-amber-700 transition-colors"
                    >
                      <span>Ruta</span>
                      <Navigation className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </LeafletMap>
      </div>

    </div>
  );
};

export default MapContainerComponent;