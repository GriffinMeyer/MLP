
var filesadded="";

function loadjsfile(filename)
{

	if(checkIfFileAlreadyLoaded(filename) == true)
	{
		return;
	}
	
	// creates attributes needed to add the js script
	 var script=document.createElement('script');
	 script.src = filename;
	 //script.async = false;
	console.log("file loaded");
     document.write('<script src="' +filename + '"></'+'script>');
}


function checkIfFileAlreadyLoaded(filename)
{
	if(filesadded.contains(filename))
	{
		console.log("file already loaded");
		return true;
	}
    filesadded+="[ "+filename+" ]";
    return false;
	
}


