let Story = [
  {
    id: 0,
    title: 'The Invisible Girls',
    author: 'CIELL Team',
    description: 'This is just a very short demo story. It is pretty much about nothing.',
    preview: 'invisible-girls/cover.png',
    color: 'rgb(50, 60, 50)',
    chapters: [
      {
        id: 0,
        title: 'The Invisible Girls',
        content: `<div class="comic-grid">
            <div class="half">
              [image|invisible-girls/invisible 00.jpg|Invisible Girls 1]
            </div>
            <div class="half last">
              [image|invisible-girls/invisible 02.jpg|Invisible Girls 2]
            </div>
            <div class="half no-margin">
              [image|invisible-girls/invisible 03.jpg|Invisible Girls 1]
            </div>
            <div class="half last no-margin">
              [image|invisible-girls/invisible 04.jpg|Invisible Girls 2]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        content: `<div class="comic-grid">
        <div class="half">
          [image|invisible-girls/invisible 05.jpg|Invisible Girls 1]
        </div>
        <div class="half last">
          [image|invisible-girls/invisible 06.jpg|Invisible Girls 2]
        </div>
        <div class="half">
          [image|invisible-girls/invisible 07.jpg|Invisible Girls 7]
        </div>
        <div class="half last no-margin">
          [image|invisible-girls/invisible 08.jpg|Invisible Girls 8]
        </div>
        <div class="half no-margin centered">
          [image|invisible-girls/invisible 09.jpg|Invisible Girls 9]
        </div>
      </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 0
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 30
          }
        ]
      },
      {
        id: 30,
        content: `<div class="comic-grid">
        <div class="half last">
          [image|invisible-girls/invisible 10.jpg|Invisible Girls 10]
        </div>
        <div class="half no-margin">
          [image|invisible-girls/invisible 11.jpg|Invisible Girls 11]
        </div>
        <div class="half no-margin centered">
          [image|invisible-girls/invisible 12.jpg|Invisible Girls 12]
        </div>
      </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 20
          },
          {
            'text': 'Restart',
            'class': 'next',
            'iconAfter': 'undo',
            'chapterId': 0
          }
        ]
      }
    ]
  },
  {
    id: 10,
    placeholder: true,
    title: 'Nuclear Power',
    author: 'CIELL Team',
    description: 'This is another empty story.',
    preview: 'nuclear-power/cover.png',
    color: 'rgb(230, 79, 78)',
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
  },
  {
    id: 20,
    placeholder: true,
    title: 'Agatha Christie',
    author: 'CIELL Team',
    description: 'This is another empty story.',
    preview: 'agatha-christie/cover.png',
    color: 'rgb(38, 35, 64)',
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
  },
  {
    id: 30,
    title: 'App Testing',
    author: 'CIELL Team',
    description: 'This is just a very short demo story. It is pretty much about nothing.',
    preview: 'invisible-girls/cover.png',
    color: 'rgb(50, 60, 50)',
    tasks: [
      {
        id: 0,
        type: 'sort',
        title: 'My title is Sorting',
        description: 'Please put the items below in the correct order (drag & drop). Once you\'re done, click the "Check order" button at the end of the list.',
        items: [
          {
            order: 10,
            title: 'I am the item title 1',
            image: '1280x640-1.jpg'
          },
          {
            order: 20,
            title: 'I am the item title 2'
          },
          {
            order: 30,
            title: 'I am the item title 3'
          },
          {
            order: 40,
            title: 'I am the item title 4'
          },
          {
            order: 50,
            title: 'I am the item title 5'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Introduction',
        content: `<p>Stories are structured in <span class="highlight"><strong>Chapters</strong></span>. This is the first Chapter of the Story "Welcome to CIELL".</p>
        <p>Just like the rest of the app, chapters can include basically any kind of content that can be displayed on a website. I assume that the main content of the chapters will be comic strips that move the story forward.</p>
        <p>Chapters also consist of any number of <span class="highlight"><strong>Choices</strong></span> (cf. the large buttons below) that take the user to the next chapter. This will help us to develop our <span class="highlight"><strong>Storyboards</strong></span>. Click on one of them to continue to the respective chapter.</p>`,
        audio: [
          {
            filename: 'sine-wave.mp3',
            label: 'Audio Content'
          }
        ],
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
        content: `
        <div class="comic-grid">
          <div class="full">
            [image|1280x640-1.jpg|Comic 1-1]
            <span>1280x640</span>
          </div>
          <div class="half">
            [image|640x640-1.jpg|Comic 1-2]
            <span>640x640</span>
          </div>
          <div class="half last">
            [image|640x640-2.jpg|Comic 1-3]
            <span>640x640</span>
          </div>
          <div class="half">
            [image|640x640-3.jpg|Comic 1-4]
            <span>640x640</span>
          </div>
          <div class="half last">
            [image|640x640-4.jpg|Comic 1-5]
            <span>640x640</span>
          </div>
          <div class="full">
            [image|1280x640-2.jpg|Comic 1-6]
            <span>1280x640</span>
          </div>
          <div class="half">
            [image|640x640-5.jpg|Comic 1-7]
            <span>640x640</span>
          </div>
          <div class="half last">
            [image|640x640-6.jpg|Comic 1-8]
            <span>640x640</span>
          </div>
        </div>
        <p>Comics consist of a variable amount of square or rectangular images organized in rows. Square images will resize to full width on smaller screen sizes. Rectangular images will keep their width and only adjust in height. Rectangular images should be <strong>1280x640 pixels</strong> and square images <strong>640x640 pixels</strong>.</p>
        <p>Oh, and yes, this chapter is almost identical to [decorator|chapter 1|1].</p>`,
        choices: [
          {
            'text': 'Proceed to Chapter 3',
            'chapterId': 3
          }
        ]
      },
      {
        id: 3,
        title: '',
        content: '',
        taskId: 0,
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
        content: `<p>The final Chapter of a Story might include some sort of <span class="highlight"><strong>Feedback</strong></span> that reflects how well the user did in the learning activities.</p>`,
        choices: [
          {
            'text': 'Restart the Story',
            'chapterId': 0
          }
        ],
        finalChapter: true
      }
    ]
  }
]

export default Story
