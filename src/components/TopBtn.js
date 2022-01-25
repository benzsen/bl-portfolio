
const TopBtn = () =>{
  window.onscroll = () => {
    const mybutton = document.getElementById("topBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
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