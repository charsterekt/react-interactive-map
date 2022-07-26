import { useState, useEffect } from 'react'
import Legend from './Legend'
import '../public/Map.css'
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {

    const [map, setMap] = useState(null)
    // const [mapData, setMapData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const defaultCenter = [19.0299, 17.9281]
    
    /* Backend request fetching -> Disabled for deployment
    useEffect(() => {
        fetch('http://localhost:3000/api')
        .then((res) => res.json())
        .then((data) => {
            setMapData(data.mapData)
            setIsLoaded(true)
        })
        .catch((err) => console.log(err))
    }, [])
    */
    
    // Would ideally fetch from the Express app, but simplifying deployment
    const mapData = [
        {
            "id": 1,
            "region": "US",
            "city": "New York",
            "coordinates": [-74.0056, 40.7293],
            "data": 290
        }, {
            "id": 2,
            "region": "US",
            "city": "Los Angeles",
            "coordinates": [-118.2380, 34.0709],
            "data": 490
        }, {
            "id": 3,
            "region": "AT",
            "city": "Vienna",
            "coordinates": [16.3703, 48.2182],
            "data": 540
        }, {
            "id": 4,
            "region": "SE",
            "city": "Stockholm",
            "coordinates": [18.0632, 59.3422],
            "data": 590
        }, {
            "id": 5,
            "region": "FR",
            "city": "Paris",
            "coordinates": [2.3256, 48.9322],
            "data": 290
        }, {
            "id": 6,
            "region": "SE",
            "city": "Gothenburg",
            "coordinates": [11.9843, 57.7084],
            "data": 390
        }, {
            "id": 7,
            "region": "IN",
            "city": "Mumbai",
            "coordinates": [72.8777, 19.0760],
            "data": 650
        }, {
            "id": 8,
            "region": "IN",
            "city": "Kolkata",
            "coordinates": [88.3639, 22.5726],
            "data": 420
        }, {
            "id": 9,
            "region": "JP",
            "city": "Tokyo",
            "coordinates": [139.6917, 35.6895],
            "data": 500
        }, {
            "id": 10,
            "region": "JP",
            "city": "Osaka",
            "coordinates": [135.5022, 34.6937],
            "data": 250
        }, {
            "id": 11,
            "region": "RU",
            "city": "Moscow",
            "coordinates": [37.6173, 55.7558],
            "data": 460
        }, {
            "id": 12,
            "region": "CN",
            "city": "Beijing",
            "coordinates": [116.4074, 39.9042],
            "data": 710
        }, {
            "id": 13,
            "region": "TR",
            "city": "Istanbul",
            "coordinates": [28.9784, 41.0082],
            "data": 200
        }, {
            "id": 14,
            "region": "CN",
            "city": "Shanghai",
            "coordinates": [121.4737, 31.2304],
            "data": 200
        }, {
            "id": 15,
            "region": "SA",
            "city": "Cape Town",
            "coordinates": [18.4342, -33.9071],
            "data": 400
        }, {
            "id": 16,
            "region": "KE",
            "city": "Nairobi",
            "coordinates": [36.7850, -1.2736],
            "data": 200
        }
    ]

    return (
        isLoaded ? (
            <MapContainer 
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
