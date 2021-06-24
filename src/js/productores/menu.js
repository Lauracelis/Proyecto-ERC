function inicio(){
    let principal= document.getElementsByClassName('ContainerHome')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("Quien")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("products")[0];
	tercero.style.display="none";
}

function quienes(){
    let principal= document.getElementsByClassName("Quien")[0];
	principal.style.display="flex";
    let segundo= document.getElementsByClassName('ContainerHome')[0];
	segundo.style.display= "none";     
	let tercero= document.getElementsByClassName("products")[0];
	tercero.style.display="none";
}

function productos(){
    let principal= document.getElementsByClassName("products")[0];
	principal.style.display="flex";
    let segundo= document.getElementsByClassName('ContainerHome')[0];
	segundo.style.display= "none";
	let tercero= document.getElementsByClassName("Quien")[0];
	tercero.style.display="none";
}