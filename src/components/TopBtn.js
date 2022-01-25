
const TopBtn = () =>{
  window.onscroll = () => {
    const mybutton = document.getElementById("topBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.visibility = "visible";
      mybutton.style.opacity= 1;
    } else {
      mybutton.style.visibility = "hidden";
      mybutton.style.opacity= 0;
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  return(
    <button onClick={()=>topFunction()} id="topBtn" title="Go to top">
      <img src="/nav-link-img/up.svg"/>
    </button>
  )
}

export default TopBtn