import Head from 'next/head';

export default function Home() {
    return ( <
        >
        <
        Head >
        <
        title > Taren Mansfield | Portfolio < /title> <
        meta name = "description"
        content = "Taren Mansfield's Portfolio" / >
        <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1" / >
        <
        link rel = "shortcut icon"
        href = "/images/2d0b56e7e51cf11036ad8734bdb67e2d.png" / >
        <
        /Head>

        <
        div className = "container" >
        <
        header >
        <
        div className = "profile-container" >
        <
        img src = "https://via.placeholder.com/200x200"
        alt = "Taren Mansfield"
        className = "profile-image" / >
        <
        img src = "/images/profile.jpg"
        alt = "Taren Mansfield"
        className = "profile-image"
        style = {
            { display: 'none' }
        }
        onLoad = {
            (e) => {
                e.target.style.display = 'block';
                e.target.previousElementSibling.style.display = 'none';
            }
        }
        /> < /
        div > <
        h1 > TAREN MANSFIELD < /h1> < /
        header >

        <
        div className = "featured-image" >
        <
        img src = "/images/featured-placeholder.jpg"
        alt = "Featured Image"
        onError = {
            (e) => e.target.style.display = 'none'
        }
        /> <
        div className = "featured-caption" > Highlight a special moment or achievement < /div> < /
        div >

        <
        div className = "section-title" > Get to Know Taren < /div>

        <
        div className = "bio" >
        <
        p > Hi, I 'm Taren and I was born and raised in St. Paul, Minnesota. I'
        ve always loved television, film, and most of all storytelling.I started my journey in Hollywood as an intern on one of my all - time favorite television shows, How to Get Away with Murder.A dream come true! < /p> <
        p > There, I realized my love
        for writing and the power that innovation and dynamic storytelling hold.Since my time at Shondaland, I have worked at HBO Max, Apple TV + , and NBCUniversal learning the landmarks of TV development and the intricacies on the writing and production side. < /p> <
        p > As a marketing consultant, I create professional and unique pitch decks that showcase the unique worlds of my clients.I am continuously passionate about writing and creating stories based in drama, comedy, science - fiction, and young - adult. < /p> <
        p > In my free time, I love to swim, travel to new places, binge - watch new series, ride horses, and spend time with family and friends.I am the founder of Well - Written, a writer 's group focused on the tools of writing, wellness, and support. This year, I'
        m reading more, dancing more, hydrating more, and creating more… so,
        let 's connect!</p> < /
        div >

        <
        div className = "section-title" > The Experience < /div>

        <
        div className = "experience" >
        <
        div className = "experience-item" >
        <
        div className = "experience-title" > Intern < /div> <
        div className = "experience-company" > Shondaland - How to Get Away with Murder < /div> <
        p > Started my journey in Hollywood as an intern on one of my all - time favorite television shows. < /p> < /
        div >

        <
        div className = "experience-item" >
        <
        div className = "experience-title" > TV Development < /div> <
        div className = "experience-company" > HBO Max, Apple TV + , NBCUniversal < /div> <
        p > Learned the landmarks of TV development and the intricacies on the writing and production side. < /p> < /
        div >

        <
        div className = "experience-item" >
        <
        div className = "experience-title" > Marketing Consultant < /div> <
        p > Create professional and unique pitch decks that showcase the unique worlds of my clients. < /p> < /
        div >

        <
        div className = "experience-item" >
        <
        div className = "experience-title" > Founder < /div> <
        div className = "experience-company" > Well - Written < /div> <
        p > A writer 's group focused on the tools of writing, wellness, and support.</p> < /
        div > <
        /div>

        <
        div className = "section-title" > My Work < /div> <
        div className = "gallery" > {
            [1, 2, 3].map((num) => ( <
                div key = { num }
                className = "gallery-item" >
                <
                img src = { `/images/work-placeholder-${num}.jpg` }
                alt = { `Work Sample ${num}` }
                onError = {
                    (e) => e.target.style.display = 'none'
                }
                /> <
                div className = "gallery-caption" > Project Title { num } < /div> < /
                div >
            ))
        } <
        /div>

        <
        div className = "section-title" > The Passions < /div> <
        div className = "experience" >
        <
        ul >
        <
        li > Swimming < /li> <
        li > Traveling to new places < /li> <
        li > Binge - watching new series < /li> <
        li > Riding horses < /li> <
        li > Spending time with family and friends < /li> <
        li > Writing and creating stories in drama, comedy, science - fiction, and young - adult < /li> < /
        ul > <
        /div>

        <
        div className = "section-title" > Life Moments < /div> <
        div className = "gallery" > {
            [1, 2, 3].map((num) => ( <
                div key = { num }
                className = "gallery-item" >
                <
                img src = { `/images/personal-placeholder-${num}.jpg` }
                alt = { `Personal Photo ${num}` }
                onError = {
                    (e) => e.target.style.display = 'none'
                }
                /> <
                div className = "gallery-caption" > Caption
                for personal photo { num } < /div> < /
                div >
            ))
        } <
        /div>

        <
        div className = "section-title" > Get In Touch < /div> <
        div className = "bio"
        style = {
            { textAlign: 'center' }
        } >
        <
        p > Interested in collaborating or learning more about my work ? Feel free to reach out! < /p> <
        p > < strong > Email : < /strong> <a href="mailto:your-email@example.com">your-email@example.com</a > < /p> <
        p >
        <
        strong > Social Media: < /strong> { ' ' } <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" > LinkedIn < /a> { ' | ' } <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" > Twitter < /a> { ' | ' } <
        a href = "#"
        target = "_blank"
        rel = "noopener noreferrer" > Instagram < /a> < /
        p > <
        /div> < /
        div >

        <
        style jsx global > { `
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        header {
          text-align: center;
          margin-bottom: 40px;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: bold;
          font-style: italic;
          margin-bottom: 10px;
        }

        .bio {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .section-title {
          font-size: 2rem;
          margin: 40px 0 20px;
          font-style: italic;
        }

        .experience {
          margin-bottom: 40px;
        }

        .experience-item {
          margin-bottom: 20px;
        }

        .experience-title {
          font-weight: bold;
          font-size: 1.3rem;
        }

        .experience-company {
          font-style: italic;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;
          margin-bottom: 40px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
        }

        .gallery-item img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .gallery-caption {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
        }

        .featured-image {
          margin: 40px 0;
          text-align: center;
        }

        .featured-image img {
          max-width: 100%;
          max-height: 500px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .featured-caption {
          margin-top: 10px;
          font-style: italic;
          color: #666;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 20px;
          display: block;
          border: 5px solid #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      ` } < /style> < / >
    );
}