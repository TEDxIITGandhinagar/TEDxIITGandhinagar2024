import './Speaker.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import { SpeakerData } from './SpeakerData';


function SpeakerItem({ index, item }) {
    return (
        <div className="ag-timeline_item">
            <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
                <div className="ag-timeline_img-box">
                    <img src={item.imgSrc} className="ag-timeline_img common-image-speak" alt={index} />
                </div>
                <div className="ag-timeline_info-item">
                    <div className="ag-timeline_descr-item">
                        <div className="ag-timeline_title-item">{item.name}</div>
                        <p className="ag-timeline_text-item">{item.text}</p>
                    </div>
                    <div className="ag-timeline_descr-item">
                        <a href={item.Linkedin} className="ag-timeline_link-item" style={{ display: 'block', margin: '7px' }}>Linkedin</a>
                        <a href={item.Instagram} className="ag-timeline_link-item" style={{ display: 'block', margin: '7px' }}>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Speakers() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="ag-timeline-block">
                <div className="ag-format-container">
                    <div className="ag-timeline_title-list">Our <span id='speaker'>Speakers</span></div>
                    <div className="ag-timeline_list">
                        {SpeakerData.map((item, index) => (
                            <SpeakerItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speakers;



// function Schedule() {
//     useEffect(() => {
//         AOS.init();
//     }, []);
//     return (
//         <>
//             <div className="ag-timeline-block">
//                 <div className="ag-format-container">
//                     <div className="ag-timeline_title-list">Speakers Lineup for this year's talks</div>
//                     <div className="ag-timeline_list">
//                         <div className="ag-timeline_item">
//                             <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
//                                 <div className="ag-timeline_img-box">
//                                     <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline-speakers/images/img-1.png" className="ag-timeline_img" alt="" />
//                                 </div>
//                                 <div className="ag-timeline_info-item">
//                                     <div className="ag-timeline_descr-item">
//                                         <div className="ag-timeline_title-item">Vivamus Relementum</div>
//                                         <p className="ag-timeline_text-item">Duis leo. Sed fringilla mauris sit amet nibh.</p>
//                                     </div>
//                                     <div className="ag-timeline_descr-item">
//                                         <p className="ag-timeline_text-item">Donec sodales sagittis...</p>
//                                         <a href="" className="ag-timeline_link-item">Consequat</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ag-timeline_item">
//                             <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
//                                 <div className="ag-timeline_img-box">
//                                     <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline-speakers/images/img-2.png" className="ag-timeline_img" alt="" />
//                                 </div>
//                                 <div className="ag-timeline_info-item">
//                                     <div className="ag-timeline_descr-item">
//                                         <div className="ag-timeline_title-item">Nulla Consequat</div>
//                                         <p className="ag-timeline_text-item">контент-менеджер в LaLiga</p>
//                                     </div>
//                                     <div className="ag-timeline_descr-item">
//                                         <p className="ag-timeline_text-item">Nam eget dui. Etiam rhoncus...</p>
//                                         <a href="" className="ag-timeline_link-item">Consequat</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ag-timeline_item">
//                             <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
//                                 <div className="ag-timeline_img-box">
//                                     <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline-speakers/images/img-3.png" className="ag-timeline_img" alt="" />
//                                 </div>
//                                 <div className="ag-timeline_info-item">
//                                     <div className="ag-timeline_descr-item">
//                                         <div className="ag-timeline_title-item">Maecenas Tempus</div>
//                                         <p className="ag-timeline_text-item">маркетинг директор ФК «Шахтер»</p>
//                                     </div>
//                                     <div className="ag-timeline_descr-item">
//                                         <p className="ag-timeline_text-item">Wtellus eget condimentum rhoncus...</p>
//                                         <a href="" className="ag-timeline_link-item">Consequat</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ag-timeline_item">
//                             <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
//                                 <div className="ag-timeline_img-box">
//                                     <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline-speakers/images/img-4.png" className="ag-timeline_img" alt="" />
//                                 </div>
//                                 <div className="ag-timeline_info-item">
//                                     <div className="ag-timeline_descr-item">
//                                         <div className="ag-timeline_title-item">Maecenas Nec</div>
//                                         <p className="ag-timeline_text-item">СМО Parimatch Ukraine</p>
//                                     </div>
//                                     <div className="ag-timeline_descr-item">
//                                         <p className="ag-timeline_text-item">Donec pede justo, fringilla vel, aliquet nec...</p>
//                                         <a href="" className="ag-timeline_link-item">Consequat</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ag-timeline_item">
//                             <div className="ag-timeline_body-item aos-init" data-aos="fade-left">
//                                 <div className="ag-timeline_img-box">
//                                     <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline-speakers/images/img-5.png" className="ag-timeline_img" alt="" />
//                                 </div>
//                                 <div className="ag-timeline_info-item">
//                                     <div className="ag-timeline_descr-item">
//                                         <div className="ag-timeline_title-item">Aliquam Ulorem</div>
//                                         <p className="ag-timeline_text-item">Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>
//                                     </div>
//                                     <div className="ag-timeline_descr-item">
//                                         <p className="ag-timeline_text-item">Donec vitae sapien ut libero venenatis faucibus...</p>
//                                         <a href="" className="ag-timeline_link-item">Consequat</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Schedule;