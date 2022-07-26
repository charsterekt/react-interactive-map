import { useEffect } from 'react'
import L from 'leaflet'
import '../public/Legend.css'

const Legend = ({map}) => {
    //console.log(map)
    useEffect(() => {
        if (map) {
            const legend = L.control({ position: 'bottomleft' })

            legend.onAdd = () => {
                const div = document.getElementById('legend')
                div.innerHTML += "<h4>Data Usage</h4>"
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 1)"></i>100<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.9)"></i>90<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.8)"></i>80<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.7)"></i>70<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.6)"></i>60<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.5)"></i>50<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.4)"></i>40<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.3)"></i>30<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.2)"></i>20<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0.1)"></i>10<br>'
                div.innerHTML += '<i style="background: rgba(51, 136, 255, 0)"></i>0<br><br>'
                div.innerHTML += '<small>In Millions<small>'
                return div
            }
            legend.addTo(map)
        }
    }, [map])

    return (
        <div className="info legend" id="legend"></div>
    )
}

export default Legend