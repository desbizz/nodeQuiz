console.log("script loaded")

const username= document.getElementById("username")
const password= document.getElementById("password")
const loginForm = document.querySelector('form')
const list = document.getElementById('list')
const previousl = document.getElementById('prev')
const currentl = document.getElementById('current')
const nextl = document.getElementById('next')






// const startFetch = (page) =>{
//     fetch(`/user/${page}`).then((response) => {
//         response.json().then((data) => {
//           console.log(data)
//             if (data.error) {
//                 messageOne.textContent = data.error
//             } else {
//                 let ulPage = document.createElement('ul')
//                 let prevlink = document.createElement('a')
//                 let nextlink = document.createElement('a')
                
//                 let prevPage = document.createElement('li')
//                 let curPage = document.createElement('li')
               
//                 let nextPage = document.createElement('li')
//                 ulPage.className="pagination"
//                 prevPage.className="page-item"
//                 curPage.className="page-item"
//                 nextPage.className="page-item"
            
                
//                 prevlink.className="page-link"
//                 prevlink.innerHTML="previous"
//                 prevPage.appendChild(prevlink)
//                 ulPage.appendChild(prevPage)
//                 for(i=0; i<data.totalPages; i++){
//                     let link = document.createElement('a')
                    
//                     link.className="page-link"
//                     link.innerHTML=i+1
//                     link.onclick=()=>{
//                         console.log('here')
//                     }
//                     curPage.appendChild(link)
//                 }
                
              
//                 nextlink.className="page-link"
//                 nextlink.innerHTML="next"
                
               
               
//                 nextPage.appendChild(nextlink)
                
                
//                 ulPage.appendChild(curPage)
//                 ulPage.appendChild(nextPage)
//                 let listUser = document.createElement('ul')
//                 for(i=0; i < data.data.length; i++){
                    
//                     let todo =document.createElement('li');
//                     todo.innerHTML = data.data[i].username + ' | ' + data.data[i].email
//                     listUser.appendChild(todo)
    
                   
          
//                 }
//                 list.appendChild(listUser)
//                 list.appendChild(ulPage)
            
               
//             }
//         })
//     })

// }



loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!username.value || !password.value  ){
        alert('username / passward is required')

    } else{
        fetch("/user",
        {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            'username':username.value,
            'password':password.value
        } )
        })
        .then(function(res){
            return res.json(); 
    
        })
        .then(function(data){
            if(data.status==0){
                alert('Invalid Details')
    
            }  else if(data.status==1){
                alert('Invalid Details')
    
            } 
            console.log(data)
             })
        .catch((err)=>console.log(err))  
    }
  

})




