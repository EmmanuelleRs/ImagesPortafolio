const images = [
    {name: 'En las montañas', set: 'paisajes', url: 'https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg'},
    {name: 'En los Andes', set: 'paisajes', url: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg'},
    {name: 'Paris', set: 'viajes', url: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72'},
    {name: 'Alemania', set: 'viajes', url: 'https://www.caracteristicas.co/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg'},
    {name: 'Dobby', set: 'mascotas', url: 'https://www.infobae.com/new-resizer/d09N_vgiOAqH_NojJDsUET2Dk2s=/1200x900/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/5NQ4QLPS7VFF3A7MYAKGMNE7OA.jpg'},
    {name: 'Mis Aves', set: 'mascotas', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4KajCFs_Ya1PocCA8MweZEUk7gIrv7lwhQ&usqp=CAU'},
    {name: 'Atenas', set: 'arquitectura', url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg'},
    {name: 'NAICM', set: 'proyectos', url: 'https://www.esdesignbarcelona.com/sites/default/files/styles/bloque/public/5-tendencias-de-arquitectura-para-los-proximos-anos.jpg?itok=Fzoq0TGO'},
]

const showMenu = bool => {
    //bool = e.target.checked;
    if( bool === true){
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('#dash').onclick = () => {clicked()};
    }else{
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('#dash').onclick = '';
    }
}
const clicked = () => {
    document.querySelector('#ch').click();
}

const getFilter = () => {
    const array = Array.from(document.getElementsByName('filter'));
    const c = array.filter( a => (a.checked === true));
    const filter = [];
    
    c.forEach( element => {
        filter.push(element.value)
    })
    
    return filter;
}

const imgs = () => {
    const f = getFilter();
    document.querySelector('#dash').innerHTML = '';
    images.forEach( x =>{
        if(f.includes(x.set)){
            var {name, url} = x;
            document.querySelector('#dash').innerHTML += `
            <div class="post">
                <div class="postIMG">
                    <img src="${url}">
                </div>
                <div class="postTXT">
                    <h4>${name}</h4>
                </div>
            </div>`;
        }
    })
    
}

window.addEventListener('load', imgs())