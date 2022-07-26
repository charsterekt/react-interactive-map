import { useEffect } from 'react'
import L from 'leaflet'
import '../public/Legend.css'

const Legend = ({map}) => {
    console.log(map)
    useEffect(() => {
        if (map) {
            const legend = L.control({ position: 'bottomleft' })

            legend.onAdd = () => {
                const div = L.DomUtil.create('div', 'info legend')
                div.innerHTML = "<h4>Legend</h4>" + "<b>Data Usage (in millions)</b>"
                return div
            }
            legend.addTo(map)
        }
    }, [map])

    return (
        null
    )
}

export default Legend