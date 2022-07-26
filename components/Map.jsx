import { useState, useEffect } from 'react'
import Legend from './Legend'
import '../public/Map.css'
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.js'
import 'leaflet/dist/leaflet.css'

const Map = () => {

    const [map, setMap] = useState(null)
    const [mapData, setMapData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const defaultCenter = [19.0299, 17.9281]

    useEffect(() => {
        fetch('http://localhost:3000/api')
        .then((res) => res.json())
        .then((data) => {
            setMapData(data.mapData)
            setIsLoaded(true)
        })
        .catch((err) => console.log(err))
    }, [])

    // console.log(mapData)
    //const currentMap = useMap()
    return (
        isLoaded ? (
            <MapContainer 
                fullscreenControl={true} 
                center={[defaultCenter[0], defaultCenter[1]]} 
                zoom={3} 
                scrollWheelZoom={true}
                ref={setMap}
            >
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Legend map={map} />
                {mapData.map((region) => {
                    return (
                        <CircleMarker 
                            center={[region.coordinates[1], region.coordinates[0]]}
                            radius={region.data / 16}
                            fillOpacity={region.data / 1000}  // As a percentage
                            stroke={false}
                            key={region.id}
                        >
                            <Tooltip direction='top' opacity={1} sticky>
                                <span>{`Data usage in ${region.city}: ${region.data} Million Units`}</span>
                            </Tooltip>
                        </CircleMarker>
                    )
                })}
            </MapContainer>
        ) : (
            <div>Loading...</div>
        )
    )
}

export default Map