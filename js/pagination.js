
let all_items = [
    {title :'Winter Garden' , date : 'December, 2020',img:'../images/portifo/Garden8/HEADER.jpg',type:'corporate',href:'Winter_Garden.html'},
    {title :'Family & Friends' , date : 'December, 2019',img:'../images/portifo/Soma_Bay/Header.jpg',type:'originals',href:'F&F_portifolio.html'},
    {title :'GALERIE' , date : 'December, 2019',img:'../images/portifo/Galerie/Header.jpg',type:'originals',href:'Galerie.html'},
    {title :'The Roman Celebration ' , date : 'December, 2019',img:'../images/portifo/Bvlgari/Header.jpg',type:'corporate',href:'The_Roman_Celebration_Bvlgari.html'},
    {title :'People of the Industry' , date : 'November, 2019',img:'../images/portifo/CIFF_People_of_Industry_2019/header.jpg',type:'corporate',href:'CIFF_People_of_the_Industry.html'},
    {title :'The Gala by Badya' , date : 'November, 2019',img:'../images/portifo/CIFF_After_Party_Gala_2019/Header.jpg',type:'corporate',href:'The_Gala_by_Badya.html'},
    {title :'Fanadir Launch' , date : 'September, 2019',img:'../images/portifo/Fanadir/Header.jpg',type:'corporate',href:'Fanadir_Launch.html'},
    {title :'GFF Afterparty' , date : 'September, 2019',img:'../images/portifo/pepsi/Header-min.jpg',type:'corporate',href:'GFF_Afterparty.html'},
    {title :'Rituals Village' , date : 'July, 2019',img:'../images/gallary/Clandestine/img3.png',type:'corporate',href:'Rituals_Village_SABBOUR.html'},
    {title :'Arabian Nights' , date : '2019',img:'../images/portifo/Arabian_Nights/Header.jpg',type:'social',href:'Arabian_Nights.html'},
    {title :'CIFF Afterparty' , date : 'November, 2018',img:'../images/portifo/CIFF_2018/Header.jpg',type:'corporate',href:'CIFF_Afterparty.html'},
    {title :'ZO x Revita Lash' , date : 'October, 2016',img:'../images/portifo/ZO_Breast/Header.jpg',type:'corporate',href:'ZO_x_Revita_Lash.html'},
    // {title :'Gin meets Burger' , date : 'March 30, 2020',img:'../images/portifo/Gin_meets_Burger/Header.jpg',type:'corporate',href:'Gin_meets_Burger.html'},
    // {title :'Rituals of the Sun' , date : 'March 30, 2020',img:'../images/portifo/Rituals_sun/Header.jpg',type:'social',href:'Rituals_of_the_sun.html'},    
    // {title :'Family & Friends: Marassi 2018' , date : '2018',img:'../images/portifo/F&F_Marassi/Header.jpg',type:'originals',href:'F&F_TLT_Marassi_2018.html'},
    // {title :'Family & Friends: Almaza Bay' , date : 'August, 2019',img:'../images/portifo/Almaza_Bay/Header.jpg',type:'corporate',href:'F&F_Almaza_Bay_2019.html'},

];


let list_items = all_items;
function filter_items(type){
    list_items = type=='all'? all_items : all_items.filter(item=>item.type === type);
    DisplayList(list_items,list_element,rows,currentPage=1);
    SetUpPagination(list_items,pagination_element,rows);
   
    $("#our-ul").on('click','li',function(){
      
        $("#our-ul li.active").removeClass("active"); 
   
        $(this).addClass("active"); 
    });

}

// let fillter_all = document.getElementById('all');
// let fillter_originals = document.getElementById('originals');
// let fillter_social = document.getElementById('social');
// let fillter_corporate = document.getElementById('corporate');
let list_element = document.getElementById('list');
let pagination_element = document.getElementById('pagination');
let pagination2 = document.getElementById('pagination2');
let currentPage = 1;
let rows = 8;
var htmlOutput = '';	
function DisplayList (items ,wrapper,rows_per_page,page){
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page ;
    let end =  start + rows_per_page;
    let paginationItems = list_items.slice(start , end);
    htmlOutput = '';	
    for (let i = 0; i < paginationItems.length ; i++){
        let item = paginationItems[i];
        let item_element = document.createElement('div');
        item_element.classList.add('item');
        htmlOutput += `
        <div class="col-lg-3 col-md-6" style="padding:0">
                           
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title AlegreyaSans-Bold">${item.title}</h5>
                <h6 class="card-subtitle mb-2 AlegreyaSansLight text-muted">${item.date}</h6>
                <div style="background-color: #000;z-index: 100;">
                 <a href=${item.href}>
                    <div class="js-img-portifolio card-img-top" style="background-image: url(${item.img});"></div>
                   
                    </a>

                </div>

            </div>
        </div>
    </div>
       `;

    }
    $( '#list' ).html( htmlOutput );
}

function SetUpPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count +1;i++){
      let btn =  paginationButton(i ,items);
        wrapper.appendChild(btn);
        
    }

    var button_input = document.getElementById('goToInput');
    button_input.value = 1;
    button_input.max = page_count ;
  
    
}
function paginationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;
    button.id = "pagination_button_" + page ;
    if(currentPage == page) button.classList.add('active');
    button.addEventListener('click', function(){
        currentPage = page;
        DisplayList(items, list_element, rows ,currentPage);
        let current_btn = document.querySelector('.pageNumber button.active');
        current_btn.classList.remove('active');
        button.classList.add('active');
        let input_value = document.getElementById("goToInput");
        input_value.value = page;
        
    });
   
    return button; 
}

function paginationInput(){
    let last_input = document.querySelector('.pageNumber button.active');
    last_input.classList.remove('active');
    let input_value = document.getElementById("goToInput").value;
    
        let current_input = document.getElementById("pagination_button_" + input_value);
        
        current_input.classList.add('active');

        
            currentPage = input_value;
            DisplayList(all_items, list_element, rows ,currentPage); 
           
 
}
// document.getElementById('goToInput').addEventListener('input',paginationInput(),false);
DisplayList(list_items,list_element,rows,currentPage);
SetUpPagination(list_items,pagination_element,rows);

