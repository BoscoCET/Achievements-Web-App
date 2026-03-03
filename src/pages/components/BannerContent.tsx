import * as React from 'react';
import '../Table.css';
import user from '../../img/user-solid.svg';
import wreathBronze from '../../img/bronze-wreath.svg';
import wreathSilver from '../../img/silver-wreath.svg';
import wreathGold from '../../img/gold-wreath.svg';

export type TriangleType = 'Parent' | 'Inset' | 'Inset Two';

interface IBannerTriangleProps{
    backgroundColor:string;
    darkBackgroundColor:string;
    studentName:string;
    studentReg: string;
    studentPoints:number;
    studentPhoto?:string;
    keyPos:number;
}

function BannerContent(props:IBannerTriangleProps){
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', zIndex:'9', alignSelf:'end', gap:'30px', position:'relative', justifyContent:'space-between', height:'100%'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', alignSelf:'end', gap:'15px', position:'relative', margin:'0px auto', paddingTop:props.keyPos === 0?'70px': props.keyPos === 1? '120px':'30px', boxSizing:'border-box'}}>
                <div style={{border:`solid 8px ${props.darkBackgroundColor}`, borderRadius:'50%'}}>
                    <div id='circle-photo' style={{display:'flex', width:'130px', height:'130px', backgroundColor:'white', borderRadius:'50%', alignItems:'center', justifyContent:'center', border:`solid 8px ${props.backgroundColor}`, overflow:'hidden'}}>
                        <div id='photo' style={{display:'flex', width:`${props.studentPhoto? '130px' : '80px'}`, height:`${props.studentPhoto? '130px' : '80px'}`, backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'center', backgroundImage:`url(${props.studentPhoto? props.studentPhoto : user})`}}>

                        </div>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <span style={{fontSize:'40px', color:'white', fontWeight:'400', textShadow: '1px 1px 0px #1d333d', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', lineHeight: '50px'}}>
                        <span style={{fontWeight:'bold', textAlign:'center'}}>{props.studentName}</span> 
                        {props.studentReg}
                    </span>
                    <span style={{fontSize:'40px', marginTop:'20px', color:props.backgroundColor, fontWeight:'900', display:'flex', alignItems:'center', justifyContent:'center', width:'65px', height:'65px', backgroundColor:'rgb(255 255 255 / 100%)', borderRadius:'50%', textShadow: '1px 1px 0px #1d333d', border:`4px solid ${props.darkBackgroundColor}`}}>{props.studentPoints}</span>
                </div>
            </div>
            <div style={{position:'relative', display:'flex', justifyContent:'center'}}>
                <h1 style={{margin:'0px', fontWeight:'900', fontSize:'80px', textShadow: 'rgba(0, 0, 0, 0.23) -1px 2px', display:'flex', alignItems:'center', justifyContent:'center', width:'100px', height:'100px',  borderRadius:'50%',  backgroundColor: props.keyPos === 0 ? '#C0C0C0' : props.keyPos === 1 ? '#D4AF37' : '#8C5A2B' }}>
                    <span style={{color: props.keyPos === 0 ? '#D9D9D9' : props.keyPos === 1 ? '#FFD700' : '#CD7F32'}}>
                        {props.keyPos === 0? '2' : props.keyPos === 1? '1' : '3'}
                    </span>
                </h1>
                <div style={{position:'absolute', width:'130px', height:'130px', backgroundImage: props.keyPos === 0 ? `url(${wreathSilver})` : props.keyPos === 1 ? `url(${wreathGold})` : `url(${wreathBronze})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', top:'6px', filter: 'drop-shadow(1px 1px 0px #1d333d)'}}></div>
            </div>
        </div>
    );
}
export default React.memo(BannerContent)