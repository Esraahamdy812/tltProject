
let all_items = [
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-1.png',type:'social'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-5.png',type:'social'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-2.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-6.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-3.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-7.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-4.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-8.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-6.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-3.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-7.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-4.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-8.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-1.png',type:'social'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-5.png',type:'social'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-2.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-7.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-4.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-8.png',type:'corporate'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-6.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-3.png',type:'originals'},
    {title :'New Season, New Hopes.' , date : 'March 30, 2020',img:'../images/portifo/portifo-3.png',type:'originals'},

    
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
                                        <img src=${item.img} class="card-img-top card-img-top2" alt="...">
    
                                    </div>
    
                                </div>
                            </div>
                        </div>
       `;
        
        // wrapper.appendChild(htmlOutput);
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

