// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-blank-topographies",
      
        title: "Blank Topographies",
      
      description: "Exformation, a concept and process of information removal in art",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/becker/";
        
      },
    },{id: "post-drupalcon-2024-portland-oregon",
      
        title: "DrupalCon 2024: Portland, Oregon",
      
      description: "First experiences at DrupalCon 2024",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/drupalcon/";
        
      },
    },{id: "post-apps-i-39-m-taking-into-2024",
      
        title: "Apps I&#39;m Taking into 2024",
      
      description: "A short list of applications that I&#39;ve found useful in 2023.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/apps/";
        
      },
    },{id: "post-apps-i-39-m-taking-into-2023",
      
        title: "Apps I&#39;m Taking into 2023",
      
      description: "A short list of applications that I&#39;ve found useful in 2022.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/apps/";
        
      },
    },{id: "post-hello-oplin",
      
        title: "Hello OPLIN! 🎉",
      
      description: "A fresh set of challenges and new opportunities to serve Ohio&#39;s public libraries",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/oplin/";
        
      },
    },{id: "post-contactless-library-services-amp-teddy-award",
      
        title: "Contactless Library Services &amp; TEDDY Award",
      
      description: "A few photos from the 2022 ALAO Conference at the Nationwide Conference Center",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/alao/";
        
      },
    },{id: "post-2022-apps-a-bit-differently",
      
        title: "2022 Apps, A Bit Differently",
      
      description: "Soft aspirations for the new year",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/2021apps/";
        
      },
    },{id: "post-code-4-lib-2021-online",
      
        title: "code{4}Lib 2021 - Online",
      
      description: "Leading the Website Working Group",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/code4lib-online/";
        
      },
    },{id: "post-apps-i-39-m-taking-into-2021",
      
        title: "Apps I&#39;m Taking into 2021",
      
      description: "A short list of applications that I&#39;ve found useful in 2020.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/apps/";
        
      },
    },{id: "post-2020-the-year-of-the-great-learning",
      
        title: "2020... the year of the great learning",
      
      description: "Tools &amp; Services for a virtual conference",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/alao/";
        
      },
    },{id: "post-design-after-the-end-of-the-world",
      
        title: "Design After the End of the World",
      
      description: "Speculative Design &amp; Climate Change",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/design/";
        
      },
    },{id: "post-code-4-lib-2020-pittsburgh-pa",
      
        title: "code{4}lib 2020 - Pittsburgh, PA",
      
      description: "At the emergence of a global pandemic.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/code4lib/";
        
      },
    },{id: "post-apps-i-39-m-taking-into-2020",
      
        title: "Apps I&#39;m Taking into 2020",
      
      description: "A short list of applications that I&#39;ve found useful in 2019.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/apps/";
        
      },
    },{id: "post-curses-it-39-s-glances",
      
        title: "Curses, It&#39;s Glances",
      
      description: "Python-based real-time system monitoring",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/glances/";
        
      },
    },{id: "post-overview-of-my-personal-library",
      
        title: "Overview of My Personal Library",
      
      description: "Building a personal library from scratch: Hardware, Networking, and ILS.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/my-library/";
        
      },
    },{id: "post-why-ls-is-exa",
      
        title: "Why ls is exa",
      
      description: "tl;dr: informative metadata at a glance",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/exa/";
        
      },
    },{id: "post-farewell-nano",
      
        title: "Farewell, Nano",
      
      description: "Time to retire the venerable command-line text editor.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/nano/";
        
      },
    },{id: "post-ohio-digital-network-launches",
      
        title: "Ohio Digital Network Launches",
      
      description: "State Library of Ohio announces the launch of the Ohio Digital Network",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/ohio-digital-network/";
        
      },
    },{id: "post-apps-i-39-m-taking-into-2019",
      
        title: "Apps I&#39;m Taking into 2019",
      
      description: "A short list of applications that I&#39;ve found useful in 2018",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/apps/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
