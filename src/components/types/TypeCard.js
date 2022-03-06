import { Card,Button,Image } from "react-bootstrap";

function TypeCard({data,showDetail}) {
    return (
        <Card style={{ width: '14rem', backgroundColor: data.Style.Detail_Bg, color: data.Style.Detail_Fg }} onClick={() => showDetail(data)} className="m-3">
        <Card.Body>
            <Card.Title style={{ backgroundColor: data.Style.Header_Bg, color: data.Style.Header_Fg }} className="p-1 m-0 rounded" >{data.Name}</Card.Title>
            <Card.Text style={{ fontSize: "15px", overflowY: 'auto', height: '10rem' }}  >
                {data.Desc}
            </Card.Text>
        </Card.Body>
    </Card>
    );    
}

export default TypeCard;