

// const getImagePromise = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagePromise().then( console.log );

const getImage = async() => {
    try {
        const apiKey = 'jYg9VCv37VLYfBXwko2ys2YbX4etgfLM';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error)
    }
}

getImage();



