subContainJs = document.getElementById("sub-container")

/* <div class="movie-container">
<div class="movie-img"></div>
<div class="movie-genre"></div>
<div class="movie-description"></div>
<div class="movie-link"></div>
</div> */
const collection = [
    {
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },{
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },{
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },{
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },{
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },{
        image : './src/pulp-fiction.jpg',
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "link/to/a/picture",
        genre: ["Crime", "Drama"],
        cast: [
            "John Travolta",
            "Samuel L Jackson",
            "Uma Thurman",
            "Amanda Plummer",
        ],   
        link : 'https://www.youtube.com/watch?v=MWkN3akP3cU',
    },
  
];
collection.forEach(element =>{
//creating all element and div -------------------------------------------------
    let movieContainer = document.createElement("div");
    let movieImage = document.createElement('div');
        let imageImg = document.createElement('img');
    let movieGenre = document.createElement('div');
        let genrePara1 = document.createElement('p');
        let genrePara2 = document.createElement('p');
    let movieDescription = document.createElement('div');
        let descriptionH3 = document.createElement('h3');
        let descriptionH6 = document.createElement('h6');
        let descriptionPara = document.createElement('p');
    let movieLink = document.createElement('div');
        let linkLnk = document.createElement('a');
//code to write to input the html pages------------------------------------------


// image coding ----------------------------------------------------------------
    imageImg.src = element.image;
    imageImg.classList.add('movie-img');


// genre coding ----------------------------------------------------------------
    genrePara1.innerHTML = element.genre[0];
    genrePara2.innerHTML = element.genre[1];

    genrePara1.classList.add('movie-genrePara')
    genrePara2.classList.add('movie-genrePara')
// description coding ----------------------------------------------------------
    descriptionH3.innerHTML = element.name;
    descriptionH6.innerHTML = element.director;
    descriptionPara.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    descriptionH3.classList.add('movie-descriptionH3')
    descriptionH6.classList.add('movie-descriptionH6')
    descriptionPara.classList.add('movie-descriptionPara')

// Link coding -----------------------------------------------------------------
    linkLnk.setAttribute('href',"Youtube Link");
    linkLnk.setAttribute('target',"_blank");
    linkLnk.href =element.link;
    linkLnk.innerHTML = `<i class="fa-brands fa-youtube"></i>`;
    console.log(linkLnk.href);
    linkLnk.classList.add('movie-linklnk');
//append child to div -----------------------------------------------------------
    movieImage.appendChild(imageImg);
    movieGenre.appendChild(genrePara1);
    movieGenre.appendChild(genrePara2);
    movieDescription.appendChild(descriptionH3);
    movieDescription.appendChild(descriptionH6);
    movieDescription.appendChild(descriptionPara);
    movieLink.appendChild(linkLnk)
//adding classList to div--------------------------------------------------------
    movieImage.classList.add("imageDiv")
    movieGenre.classList.add("genreDiv")
    movieDescription.classList.add("descriptionDiv")
    movieLink.classList.add("linkDiv")

//append div to movie-container--------------------------------------------------
    movieContainer.appendChild(movieImage)
    movieContainer.appendChild(movieGenre)
    movieContainer.appendChild(movieDescription)
    movieContainer.appendChild(movieLink)
//adding classList to div--------------------------------------------------------
    movieContainer.classList.add("movieContainer")
//append movie-containe to sub-container-----------------------------------------
    subContainJs.appendChild(movieContainer)
    console.log(element.name)
})