let image_url;
const handel_submit=()=>{
        const file_picker=document.getElementById("file");
        const image=file_picker.files[0];
        const formData=new FormData();
        formData.append('image_file', image);
        formData.append('size', 'auto');

        const api_key="Xu9bhqMTBaPfXLi6aCwP4Eqw";

        fetch("https://api.remove.bg/v1.0/removebg",{
                method:'POST',
                headers: {
                'X-Api-Key': api_key
             },
             body: formData
            })


            .then(function(reponse){
                return reponse.blob()
        })
        .then(function(blob){
                console.log(blob);
                const url = URL.createObjectURL(blob);
                imageURL = url;
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
        })
        .catch();
    }
    function downloadFile(){
        var anchorElement = document.createElement('a'); //<a></a>
            anchorElement.href = imageURL;
            anchorElement.download = 'naciasv.png';
            document.body.appendChild(anchorElement);
    
            anchorElement.click();
    
            document.body.removeChild(anchorElement);
       }
