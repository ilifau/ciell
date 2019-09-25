let Story = [
  {
    title: 'Welcome to CIELL',
    author: 'CIELL',
    description: 'This is just a very short demo story. It is pretty much about nothing.',
    preview: 'preview-story-1.jpg',
    tasks: [
      {
        id: 0,
        type: 'sort',
        title: 'My title is Sorting',
        description: 'Please put the items in the correct order (drag & drop).',
        items: [
          {
            order: 10,
            title: 'I am the item title 1'
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
  },
  {
    title: 'Another Story With a Slightly Longer Title',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    color: '#cec12c',
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
    placeholder: true,
    title: 'Another Story',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    color: '#66aea7',
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
    placeholder: true,
    title: 'Another Story',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    color: '#ad27bd',
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
    placeholder: true,
    title: 'Another Story',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    color: '#b93620',
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
    placeholder: true,
    title: 'Another Story',
    author: 'CIELL',
    description: 'This is another empty story.',
    preview: 'preview-story-2.jpg',
    color: '#3e9115',
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
