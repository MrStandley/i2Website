// Your Details
const scholar_name = "Jocelyn Lin"; // This name is used right next to your photo
const graduation_year = 2027; // Replace 2000 with your full graduation year. Eg. 2025
const unique_id = "27jlin";// The beginning of your email

// Website Elements
const header_background = "FILE EXTENSION ON REPOSITORY HERE IN THESE QUOTES"; // The background image set behind your name, graduation year, and "avatar"

// HTML DOM Variables
const title = document.querySelector("title");
const header = document.querySelector(".header");
const navbar = document.querySelector("nav");
const profile_head = document.querySelector(".profile-head");
const avatar = document.querySelector(".profile-head .avatar img");
const name_display = document.querySelector(".profile-head .info h3");
const graduation_year_display = document.querySelector(".profile-head .info p");
const blogs_column = document.querySelector(".blogs-column");
const projects_column = document.querySelector(".projects-column");


function createBlogPosts(){
    /*
    blogs.forEach((blog) => {
        let new_item = document.createElement("div");
        new_item.classList.add("item");
        
        let new_info = document.createElement("div");
        new_info.classList.add("info");

        let title = document.createElement("h3");
        title.appendChild(document.createTextNode(" Blog Title "));
        new_info.appendChild(title);

        let summary = document.createElement("p");
        summary.appendChild(document.createTextNode(blog.summary));
        new_info.appendChild(summary);

        let link = document.createElement("a");
        link.appendChild(document.createTextNode("Read more"));
        link.href = blog.link;
        link.classList.add("read-more");
        new_info.appendChild(link);

        new_item.appendChild(new_info);
        blogs_column.appendChild(new_item);
    });
    if(blogs.length == 0) blogs_column.style.display = "none";
    */
    if(blogs_column.children.length == 1) blogs_column.style.display = "none";
}

function createProjectProfiles(){
    /*
    projects.forEach((project) => {
        let new_item = document.createElement("div");
        new_item.classList.add("item");
        
        let new_thumb = document.createElement("div");
        new_thumb.classList.add("thumb");

        let img = document.createElement("img");
        img.src = project.img_src;
        new_thumb.appendChild(img);

        new_item.appendChild(new_thumb);
        
        let new_info = document.createElement("div");
        new_info.classList.add("info");

        let title = document.createElement("h3");
        title.appendChild(document.createTextNode(" Blog Title "));
        new_info.appendChild(title);

        let summary = document.createElement("p");
        summary.appendChild(document.createTextNode(project.summary));
        new_info.appendChild(summary);

        let link = document.createElement("a");
        link.appendChild(document.createTextNode("Project details "));
        link.href = project.link;
        link.classList.add("button");
        new_info.appendChild(link);

        let project_details = document.createElement("img");
        project_details.href = "arrow_forward.svg";
        new_info.appendChild(project_details);

        new_item.appendChild(new_info);

        projects_column.appendChild(new_item);
    });
    if(projects.length == 0) projects_column.style.display = "none";
    */
    if(projects_column.children.length == 1) projects_column.style.display = "none";
}


window.onload = () => {
    // Offset the navbar and thus the rest of the page correctly depending on the actual height of the header
    navbar.style.marginTop = header.offsetHeight + "px";

    // Updated the displayed scholar's name and graduation year
    title.innerHTML = scholar_name + " — i2 Today";
    name_display.innerHTML = scholar_name;
    graduation_year_display.innerHTML = graduation_year;

    // Update the images, including the header background
    profile_head.style.backgroundImage = "url('" + header_background + "')";

    // Make the defined blog posts and project profile pages
    createBlogPosts();
    createProjectProfiles();

    // Update the avatar
    avatar.src = students[unique_id];
}

// Change the page icon depending on the preferred color theme/scheme (light or dark)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme == "dark"){
        document.querySelector("head link:last-of-type").href = "/assets/i2_icon_dark.png";
    }else{
        document.querySelector("head link:last-of-type").href = "/assets/i2_icon_light.gif";
    }
});

// Whenever the page is scrolled, check if the header has been scrolled past. If yes, add a color to the bottom border; otherwise, reset the color to white
document.addEventListener("scroll", (event) => {
    if(window.scrollY > (header.offsetHeight + navbar.offsetHeight)){
        header.style.borderBottomColor = "var(--irish-green)";
    }else{
        header.style.borderBottomColor = "white";
    }
});
