import React from 'react';
import './Tehnika.css';

function TehnikaSaturs() {
    return (
        <div className='tehnika-saturs'>
            <h1>HEADING</h1>
            <h3>Here will be some content in latvian: <br/><br/><br/></h3>
            <div className="quotes">
                <div className="card">
                    <div className="box box1">
                        <p>Materiāls, kas ir daudz izturīgāks par poliestera sveķiem, 
                        ko izmanto izstrādājumos, kas tiek pakļauti lielai slodzei. 
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="box box2">
                        <p>Šādus izstrādājumus veido no epoksīda sveķiem savienojumā 
                        ar stikla šķiedras, oglekļa, kevlāra un citiem audumiem.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="box box3">
                        <p>Epoksīda sveķi palielina saķeri starp armējušo materiālu 
                        un palielina detaļas izturību līdz pat 100ºC vai pat lielākai.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default TehnikaSaturs;