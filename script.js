const contents = [
    {
        title:"What is Lorem Ipsum?" ,
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    } ,

    {
        title:"Where does it come from?" , 
        body:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop."
    } ,

    {
        title:"Why do we use it?" , 
        body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of usin"
    } ,

    {
        title:"Where can I get some?" , 
        body:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their d"
    } ,

    {
        title:"What is Lorem Ipsum?" , 
        body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
    } ,

    {
        title:"Why do we use it?" , 
        body:"passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32"
    } ,

    {
        title:"Where does it come from?" , 
        body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
    } ,

    {
        title:"Where can I get some?" , 
        body:"dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generate"
    } ,
];

contents.forEach((content , index)=>{
   const contentDiv = document.createElement('div') ;
   contentDiv.className = "card";
  
  
 contentDiv.innerHTML = `
  <h2>${content.title}</h2>
  <p>${content.body}</p>
  `
  ;

  const elements = document.querySelectorAll('.grid-item-element') ;
  const ids = Array.from(elements).map(elements => elements.id) ;
  //console.log(ids)

  if (ids[index]) {
    const arrayList = document.getElementById(ids[index]);
    if (arrayList) {
        arrayList.appendChild(contentDiv);
    } else {
        console.warn(`Element with ID "${ids[index]}" not found.`);
    }
}
  });
  


