let Story = [
  {
    title: 'Welcome to CIELL',
    author: 'CIELL',
    description: 'This is just a very short demo story. It is pretty much about nothing.',
    preview: 'preview-story-1.jpg',
    chapters: [
      {
        id: 0,
        title: 'Welcome to CIELL',
        content: `<p>Stories are structured in <span class="highlight"><strong>Chapters</strong></span>. This is the first Chapter of the Story "Welcome to CIELL".</p>
        <p>Just like the rest of the app, chapters can include basically any kind of content that can be displayed on a website. I assume that the main content of the chapters will be comic strips that move the story forward.</p>
        <p style="text-align:center;margin: 2em 0;">[image|comic-strip.jpg|Example Comic Strip]</p>
        <p>Chapters also consist of any number of <span class="highlight"><strong>Choices</strong></span> (cf. the large buttons below) that take the user to the next chapter. This will help us to develop our <span class="highlight"><strong>Storyboards</strong></span>. Click on one of them to continue to the respective chapter.</p>`,
        choices: [
          {
            'text': 'Proceed to Chapter 1',
            'chapterId': 1
          },
          {
            'text': 'Proceed to Chapter 2',
            'chapterId': 2
          }
        ]
      },
      {
        id: 1,
        title: 'I am Chapter 1',
        content: `<p>Navigating between chapters is really simple. This chapter is more or less empty, except for an element called <span class="highlight"><strong>Decorator</strong></span>. Try clicking on the following [decorator|Decorator (click me)|4]. A Decorator can provide additional information by linking to a specific chapter from inside the current chapter's content.</p>
        <p>And yes, this chapter is almost identical to [decorator|chapter 2|2].</p>`,
        choices: [
          {
            'text': 'Proceed to Chapter 3',
            'chapterId': 3
          }
        ]
      },
      {
        id: 2,
        title: 'I am Chapter 2',
        content: `<p>Navigating between chapters is really simple. This chapter is more or less empty, except for an element called <span class="highlight"><strong>Decorator</strong></span>. Try clicking on the following [decorator|Decorator (click me)|5]. A Decorator can provide additional information by linking to a specific chapter from inside the current chapter's content.</p>
        <p>And yes, this chapter is almost identical to [decorator|chapter 1|1].</p>`,
        choices: [
          {
            'text': 'Proceed to Chapter 3',
            'chapterId': 3
          }
        ]
      },
      {
        id: 3,
        title: 'Learning Activity',
        content: `<p>The Chapters will also contain the <span class="highlight"><strong>Learning Activities</strong></span> of the app.</p>
        <p>[image|pacman.jpg|PacMan]</p>`,
        choices: [
          {
            'text': 'Proceed to the Final Chapter',
            'chapterId': 6
          }
        ]
      },
      {
        id: 4,
        title: 'A Decorator',
        content: `<p>Nothing in here except a bit of placeholder text.</p><p>Consetetur sadipscing elitr, sed diam tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>`,
        choices: [
          {
            'text': 'Back',
            'chapterId': 1
          }
        ]
      },
      {
        id: 5,
        title: 'Another Decorator',
        content: `<p>Nothing in here except a bit of placeholder text.</p><p>Consetetur sadipscing elitr, sed diam tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>`,
        choices: [
          {
            'text': 'Back',
            'chapterId': 2
          }
        ]
      },
      {
        id: 6,
        title: 'Feedback',
        content: `<p>The final Chapter of a Story might include some sort of <span class="highlight"><strong>Feedback</strong></span> that reflects how well the user did in the learning activities.</p>
        <p style="margin-top:1.5em">[image|spiderman-victory.jpg|Goodbye!]</p>`,
        choices: [
          {
            'text': 'Restart the Story',
            'chapterId': 0
          }
        ],
        finalChapter: true
      }
    ]
  },
  {
    title: 'Another Story with No Content and a Different Title That Is Rather Long',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    chapters: [
      {
        id: 0,
        title: 'Another Story, Another Chapter!',
        content: '<p>Consetetur sadipscing elitr, sed diam tempor invidunt ut labore.</p>',
        choices: [
          {
            'text': 'Next',
            'chapterId': 1
          }
        ]
      },
      {
        id: 1,
        title: 'More Content',
        content: '<p>Test...</p>',
        choices: [
          {
            'text': 'Restart',
            'chapterId': 0
          }
        ],
        finalChapter: true
      }
    ]
  }
]

export default Story
