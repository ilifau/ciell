let Story = [
  {
    id: 10,
    title: 'Homelessness',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/poverty/',
    UNGoalImage: 'un-goals/E-Goal-01-1024x1024.png',
    description: 'A story on the issue of homelessness.',
    preview: 'homeless/cover.jpg',
    color: 'rgb(0, 98, 103)',
    numberImage: 'homeless/number.png',
    tasks: [
      {
        id: 1000,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'homeless/homeless 01.jpg'
          },
          {
            order: 1,
            image: 'homeless/homeless 02.jpg'
          },
          {
            order: 2,
            image: 'homeless/homeless 03.jpg'
          },
          {
            order: 3,
            image: 'homeless/homeless 04.jpg'
          }
        ]
      },
      {
        id: 1010,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'homeless/homeless 11.jpg'
          },
          {
            order: 1,
            image: 'homeless/homeless 12.jpg'
          },
          {
            order: 2,
            image: 'homeless/homeless 13.jpg'
          },
          {
            order: 3,
            image: 'homeless/homeless 14.jpg'
          },
          {
            order: 4,
            image: 'homeless/homeless 15.jpg'
          },
          {
            order: 5,
            image: 'homeless/homeless 16.jpg'
          }
        ]
      },
      {
        id: 1020,
        name: 'Choose the correct image',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the introduction',
            answers: [
              {
                text: 'Rephrase Topic',
                image: 'info-graphics/basic-essay-structure-1.jpg'
              },
              {
                text: 'Answer the Question',
                image: 'info-graphics/basic-essay-structure-7.jpg',
                correct: true
              }
            ]
          },
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the main body paragraph',
            answers: [
              {
                text: 'Rephrase Topic',
                image: 'info-graphics/basic-essay-structure-1.jpg',
                correct: true
              },
              {
                text: 'Examples',
                image: 'info-graphics/basic-essay-structure-5.jpg'
              }
            ]
          },
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the conclusion',
            answers: [
              {
                text: 'Explanations',
                image: 'info-graphics/basic-essay-structure-8.jpg',
                correct: true
              },
              {
                text: 'Summary',
                image: 'info-graphics/basic-essay-structure-conclusion-2.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-7.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'homeless/homeless 05.jpg',
                correct: true
              },
              {
                text: '',
                image: 'homeless/homeless 09.jpg'
              },
              {
                text: '',
                image: 'homeless/homeless 16.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1040,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-8.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'homeless/homeless 16.jpg'
              },
              {
                text: '',
                image: 'homeless/homeless 17.jpg'
              },
              {
                text: '',
                image: 'homeless/homeless 06.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 1050,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-9.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'homeless/homeless 10.jpg'
              },
              {
                text: '',
                image: 'homeless/homeless 09.jpg',
                correct: true
              },
              {
                text: '',
                image: 'homeless/homeless 16.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1060,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-6.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'homeless/homeless 08.jpg'
              },
              {
                text: '',
                image: 'homeless/homeless 10.jpg',
                correct: true
              },
              {
                text: '',
                image: 'homeless/homeless 09.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Homelessness',
        audio: [
          {
            filename: 'homelessness/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Homelessness is a serious issue in every part of the world. How could we resolve the issue in big cities?</p>',
        content: `
          <h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|homeless/homeless 01.jpg|Homeless 1]
            </div>
            <div class="half">
              [image|homeless/homeless 02.jpg|Homeless 2]
            </div>
            <div class="half">
              [image|homeless/homeless 03.jpg|Homeless 3]
            </div>
            <div class="half">
              [image|homeless/homeless 04.jpg|Homeless 4]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'homelessness/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|homeless/homeless 05.jpg|Homeless 5]
            </div>
            <div class="half">
              [image|homeless/homeless 06.jpg|Homeless 6]
            </div>
            <div class="half">
              [image|homeless/homeless 07.jpg|Homeless 7]
            </div>
            <div class="half">
              [image|homeless/homeless 08.jpg|Homeless 8]
            </div>
            <div class="half">
              [image|homeless/homeless 09.jpg|Homeless 9]
            </div>
            <div class="half">
              [image|homeless/homeless 10.jpg|Homeless 10]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        audio: [
          {
            filename: 'homelessness/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|homeless/homeless 11.jpg|Homeless 11]
            </div>
            <div class="half">
              [image|homeless/homeless 12.jpg|Homeless 12]
            </div>
            <div class="half">
              [image|homeless/homeless 13.jpg|Homeless 13]
            </div>
            <div class="half">
              [image|homeless/homeless 14.jpg|Homeless 14]
            </div>
            <div class="half">
              [image|homeless/homeless 15.jpg|Homeless 15]
            </div>
            <div class="half">
              [image|homeless/homeless 16.jpg|Homeless 16]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        audio: [
          {
            filename: 'homelessness/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
        <div class="comic-grid">
            <div class="half">
              [image|homeless/homeless 17.jpg|Homeless 17]
            </div>
            <div class="half">
              [image|homeless/homeless 18.jpg|Homeless 18]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=uDpIAcT3mqU" target="_blank">UN Sustainable Development Goal&nbsp;1</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Infographic',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'undo',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 1000,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 1010,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 1020,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Restart',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 1030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 100
          }
        ]
      },
      {
        id: 100,
        taskId: 1040,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 90
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 110
          }
        ]
      },
      {
        id: 110,
        taskId: 1050,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 100
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 120
          }
        ]
      },
      {
        id: 120,
        taskId: 1060,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 110
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
    id: 15,
    title: 'Reduce Inequality',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/inequality/',
    UNGoalImage: 'un-goals/E-Goal-10-1024x1024.png',
    description: 'This is an essay on inequality.',
    preview: 'poverty/cover.jpg',
    color: 'rgb(175, 31, 35)',
    numberImage: 'poverty/number.png',
    tasks: [
      {
        id: 1500,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-8.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'poverty/poverty 09.jpg'
              },
              {
                text: '',
                image: 'poverty/poverty 16.jpg',
                correct: true
              },
              {
                text: '',
                image: 'poverty/poverty 17.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1510,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'poverty/poverty 12.jpg'
              },
              {
                text: '',
                image: 'poverty/poverty 17.jpg'
              },
              {
                text: '',
                image: 'poverty/poverty 07.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 1520,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-2.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'poverty/poverty 19.jpg'
              },
              {
                text: '',
                image: 'poverty/poverty 06.jpg',
                corrent: true
              },
              {
                text: '',
                image: 'poverty/poverty 17.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Reduce Inequality',
        audio: [
          {
            filename: 'reduce-inequality/intro.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Investing in equal access to education, jobs and public services for young people with disabilities or learning difficulties will help to reduce world poverty.</p><p class="last">Do you agree or disagree with this statement? Explain the reasons for your opinion.</p>',
        content: `
          <h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 01.jpg|Poverty 1]
            </div>
            <div class="half">
              [image|poverty/poverty 02.jpg|Poverty 2]
            </div>
            <div class="half">
              [image|poverty/poverty 03.jpg|Poverty 3]
            </div>
            <div class="half">
              [image|poverty/poverty 04.jpg|Poverty 4]
            </div>
            <div class="half">
              [image|poverty/poverty 05.jpg|Poverty 5]
            </div>
            <div class="half">
              [image|poverty/poverty 06.jpg|Poverty 6]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'reduce-inequality/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 07.jpg|Poverty 7]
            </div>
            <div class="half">
            [image|poverty/poverty 08.jpg|Poverty 8]
            </div>
            <div class="half">
              [image|poverty/poverty 09.jpg|Poverty 9]
            </div>
            <div class="half">
              [image|poverty/poverty 10.jpg|Poverty 10]
            </div>
            <div class="half">
              [image|poverty/poverty 11.jpg|Poverty 11]
            </div>
            <div class="half">
              [image|poverty/poverty 12.jpg|Poverty 12]
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
            'chapterId': 15
          }
        ]
      },
      {
        id: 15,
        title: '',
        audio: [
          {
            filename: 'reduce-inequality/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 13.jpg|Poverty 13]
            </div>
            <div class="half">
              [image|poverty/poverty 14.jpg|Poverty 14]
            </div>
            <div class="half">
              [image|poverty/poverty 15.jpg|Poverty 15]
            </div>
            <div class="half">
              [image|poverty/poverty 16.jpg|Poverty 16]
            </div>
            <div class="half">
              [image|poverty/poverty 17.jpg|Poverty 17]
            </div>
            <div class="half">
              [image|poverty/poverty 18.jpg|Poverty 18]
            </div>
            <div class="half">
              [image|poverty/poverty 19.jpg|Poverty 19]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
          },
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
        title: '',
        audio: [
          {
            filename: 'reduce-inequality/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 20.jpg|Poverty 20]
            </div>
            <div class="half">
              [image|poverty/poverty 21.jpg|Poverty 21]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 15
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 30
          }
        ]
      },
      {
        id: 30,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=IELvwDvbtmo" target="_blank">UN Sustainable Development Goal&nbsp;10</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 20
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        taskId: 1500,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        taskId: 1510,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 1520,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
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
    id: 30,
    title: 'Zen Gardens',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/health/',
    UNGoalImage: 'un-goals/E-Goal-03-1024x1024.png',
    description: 'A story on the Zen gardens.',
    preview: 'zen-gardens/cover.jpg',
    color: 'rgb(234, 149, 34)',
    numberImage: 'zen-gardens/number.png',
    tasks: [
      {
        id: 3000,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'zen-gardens/zen gardens 13.jpg',
                correct: true
              },
              {
                text: '',
                image: 'zen-gardens/zen gardens 14.jpg'
              },
              {
                text: '',
                image: 'zen-gardens/zen gardens 19.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 3010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'zen-gardens/zen gardens 15.jpg'
              },
              {
                title: '',
                image: 'zen-gardens/zen gardens 14.jpg',
                correct: true
              },
              {
                text: '',
                image: 'zen-gardens/zen gardens 16.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 3020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-5.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'zen-gardens/zen gardens 09.jpg',
                correct: true
              },
              {
                text: '',
                image: 'zen-gardens/zen gardens 12.jpg'
              },
              {
                text: '',
                image: 'zen-gardens/zen gardens 04.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Zen Gardens',
        audio: [
          {
            filename: 'zen-gardens/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p class="last">A travel magazine has asked readers to send in articles on their favourite travel destination. You decide to write an article in which you describe your favourite place, explain why it is your favourite and assess its significance for the wider community.</p>',
        content: `
          <h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|zen-gardens/zen gardens 01.jpg|HomeZen Gardens 1]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 02.jpg|HomeZen Gardens 2]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 03.jpg|HomeZen Gardens 3]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 04.jpg|HomeZen Gardens 4]
            </div>            
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'zen-gardens/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|zen-gardens/zen gardens 05.jpg|HomeZen Gardens 5]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 06.jpg|HomeZen Gardens 6]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 07.jpg|HomeZen Gardens 7]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 08.jpg|HomeZen Gardens 8]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 09.jpg|HomeZen Gardens 9]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 10.jpg|HomeZen Gardens 10]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 11.jpg|HomeZen Gardens 11]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 12.jpg|HomeZen Gardens 12]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        audio: [
          {
            filename: 'zen-gardens/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|zen-gardens/zen gardens 13.jpg|HomeZen Gardens 13]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 14.jpg|HomeZen Gardens 14]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 15.jpg|HomeZen Gardens 15]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 16.jpg|HomeZen Gardens 16]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 17.jpg|HomeZen Gardens 17]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 18.jpg|HomeZen Gardens 18]
            </div>  
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        audio: [
          {
            filename: 'zen-gardens/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `
          <h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|zen-gardens/zen gardens 19.jpg|HomeZen Gardens 19]
            </div>
            <div class="half">
              [image|zen-gardens/zen gardens 20.jpg|HomeZen Gardens 20]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=0klcaICeJA4" target="_blank">UN Sustainable Development Goal&nbsp;3</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Infographic',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 3000,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 3010,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 3020,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
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
    id: 40,
    title: 'Agatha Christie',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/education/',
    UNGoalImage: 'un-goals/E-Goal-04-1024x1024.png',
    description: 'A story on the issue of quality education.',
    preview: 'agatha-christie/cover.jpg',
    color: 'rgb(235, 0, 135)',
    numberImage: 'agatha-christie/number.png',
    tasks: [
      {
        id: 4000,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-7.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'agatha-christie/agatha 19.jpg'
              },
              {
                text: '',
                image: 'agatha-christie/agatha 18.jpg'
              },
              {
                title: '',
                image: 'agatha-christie/agatha 17.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 4010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-8.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'agatha-christie/agatha 19.jpg'
              },
              {
                text: '',
                image: 'agatha-christie/agatha 18.jpg',
                correct: true
              },
              {
                text: '',
                image: 'agatha-christie/agatha 01.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 4020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-9.jpg'
            ],
            answers: [
              {
                title: '',
                image: 'agatha-christie/agatha 17.jpg'
              },
              {
                text: '',
                image: 'agatha-christie/agatha 19.jpg',
                correct: true
              },
              {
                text: '',
                image: 'agatha-christie/agatha 18.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Agatha Christie',
        examQuestion: '<p>A magazine has asked readers to send in articles on their favourite authors. You decide to write an article in which you describe your favourite author.</p><p class="last">Explain the reason for your choice, and assess the author\'s significance for the wider community.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 01.jpg|Agatha 1]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 02.jpg|Agatha 2]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 03.jpg|Agatha 3]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 04.jpg|Agatha 4]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 05.jpg|Agatha 5]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 06.jpg|Agatha 6]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 07.jpg|Agatha 7]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 08.jpg|Agatha 8]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 09.jpg|Agatha 9]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 10.jpg|Agatha 10]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 11.jpg|Agatha 11]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 12.jpg|Agatha 12]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 13.jpg|Agatha 13]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 14.jpg|Agatha 14]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 15.jpg|Agatha 15]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 16.jpg|Agatha 16]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 17.jpg|Agatha 17]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 18.jpg|Agatha 18]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 19.jpg|Agatha 19]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 20.jpg|Agatha 20]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 21.jpg|Agatha 15]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 22.jpg|Agatha 16]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 23.jpg|Agatha 17]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 24.jpg|Agatha 18]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 25.jpg|Agatha 19]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 26.jpg|Agatha 20]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=V24JzUPlR44" target="_blank">UN Sustainable Development Goal&nbsp;4</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Infographic',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 4000,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 4010,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 4020,
        title: 'Task: Choose the panel that matches',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
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
    id: 50,
    title: 'The Invisible Girls',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/gender-equality/',
    UNGoalImage: 'un-goals/E-Goal-05-1024x1024.png',
    preview: 'gender-equality/cover.jpg',
    color: 'rgb(72, 119, 82)',
    numberImage: 'gender-equality/number.png',
    tasks: [
      {
        id: 5000,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'gender-equality/invisible 00.jpg'
          },
          {
            order: 1,
            image: 'gender-equality/invisible 02.jpg'
          },
          {
            order: 2,
            image: 'gender-equality/invisible 03.jpg'
          },
          {
            order: 3,
            image: 'gender-equality/invisible 04.jpg'
          },
          {
            order: 4,
            image: 'gender-equality/invisible 05.jpg'
          },
          {
            order: 5,
            image: 'gender-equality/invisible 06 b.jpg'
          },
          {
            order: 6,
            image: 'gender-equality/invisible 07.jpg'
          },
          {
            order: 7,
            image: 'gender-equality/invisible 08.jpg'
          }
        ]
      },
      {
        id: 5010,
        name: 'Choose the correct image',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the introduction',
            answers: [
              {
                text: 'Examples',
                image: 'info-graphics/basic-essay-structure-9.jpg',
                correct: true
              },
              {
                text: 'Rephrase Topic',
                image: 'info-graphics/basic-essay-structure-1.jpg'
              },
              {
                text: 'Answer the Question',
                image: 'info-graphics/basic-essay-structure-2.jpg'
              }
            ]
          },
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the main body paragraph',
            answers: [
              {
                text: 'Topic Sentence',
                image: 'info-graphics/basic-essay-structure-3.jpg'
              },
              {
                text: 'Examples',
                image: 'info-graphics/basic-essay-structure-5.jpg'
              },
              {
                text: 'Rephrase Topic',
                image: 'info-graphics/basic-essay-structure-1.jpg',
                correct: true
              }
            ]
          },
          {
            singleChoice: true,
            question: 'Choose the image that does not belong in the conclusion',
            answers: [
              {
                text: 'Summary',
                image: 'info-graphics/basic-essay-structure-conclusion-2.jpg'
              },
              {
                text: 'Explanations',
                image: 'info-graphics/basic-essay-structure-8.jpg',
                correct: true
              },
              {
                text: 'Conclusion',
                image: 'info-graphics/basic-essay-structure-conclusion-1.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 5020,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'info-graphics/basic-essay-structure-1.jpg'
          },
          {
            order: 1,
            image: 'info-graphics/basic-essay-structure-3.jpg'
          },
          {
            order: 2,
            image: 'info-graphics/basic-essay-structure-4.jpg'
          },
          {
            order: 3,
            image: 'info-graphics/basic-essay-structure-5.jpg'
          },
          {
            order: 4,
            image: 'info-graphics/basic-essay-structure-6.jpg'
          },
          {
            order: 5,
            image: 'info-graphics/basic-essay-structure-conclusion-1.jpg'
          }
        ]
      },
      {
        id: 5030,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 10,
            image: 'gender-equality/invisible 00.jpg'
          },
          {
            order: 20,
            image: 'gender-equality/invisible 06 b.jpg'
          },
          {
            order: 30,
            image: 'gender-equality/invisible 09.jpg'
          },
          {
            order: 40,
            image: 'gender-equality/invisible 10.jpg'
          },
          {
            order: 45,
            image: 'gender-equality/invisible 11.jpg'
          },
          {
            order: 50,
            image: 'gender-equality/invisible 12.jpg'
          },
          {
            order: 60,
            image: 'gender-equality/invisible 18.jpg'
          },
          {
            order: 70,
            image: 'gender-equality/invisible 20.jpg'
          },
          {
            order: 80,
            image: 'gender-equality/invisible 22.jpg'
          },
          {
            order: 90,
            image: 'gender-equality/invisible 23.jpg'
          },
          {
            order: 100,
            image: 'gender-equality/invisible 24.jpg'
          },
          {
            order: 110,
            image: 'gender-equality/invisible 25.jpg'
          }
        ]
      },
      {
        id: 5040,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'gender-equality/invisible 17.jpg'
              },
              {
                text: '',
                image: 'gender-equality/invisible 22.jpg'
              },
              {
                text: '',
                image: 'gender-equality/invisible 10.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 5050,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'gender-equality/invisible 20.jpg',
                correct: true
              },
              {
                text: '',
                image: 'gender-equality/invisible 10.jpg'
              },
              {
                text: '',
                image: 'gender-equality/invisible 17.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 5060,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-5.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'gender-equality/invisible 10.jpg'
              },
              {
                text: '',
                image: 'gender-equality/invisible 21.jpg',
                correct: true
              },
              {
                text: '',
                image: 'gender-equality/invisible 17.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 5070,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-6.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'gender-equality/invisible 22.jpg',
                correct: true
              },
              {
                text: '',
                image: 'gender-equality/invisible 10.jpg'
              },
              {
                text: '',
                image: 'gender-equality/invisible 21.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'The Invisible Girls',
        audio: [
          {
            filename: 'invisible-girls/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Due to different gender roles and poverty, teenagers-boys and girls face different challenges at home and schools especially in developing countries.</p><p class="last">Do you agree with this statement? Give examples to support your views.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|gender-equality/invisible 00.jpg|Invisible Girls 0]
            </div>
            <div class="half">
              [image|gender-equality/invisible 02.jpg|Invisible Girls 2]
            </div>
            <div class="half">
              [image|gender-equality/invisible 03.jpg|Invisible Girls 3]
            </div>
            <div class="half">
              [image|gender-equality/invisible 04.jpg|Invisible Girls 4]
            </div>
            <div class="half">
              [image|gender-equality/invisible 05.jpg|Invisible Girls 5]
            </div>
            <div class="half">
              [image|gender-equality/invisible 06 b.jpg|Invisible Girls 6]
            </div>
            <div class="half">
              [image|gender-equality/invisible 07.jpg|Invisible Girls 7]
            </div>
            <div class="half">
              [image|gender-equality/invisible 08.jpg|Invisible Girls 8]
            </div>
            <div class="half">
              [image|gender-equality/invisible 09.jpg|Invisible Girls 9]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'invisible-girls/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
            <div class="comic-grid">
            <div class="half">
              [image|gender-equality/invisible 10.jpg|Invisible Girls 10]
            </div>
            <div class="half">
              [image|gender-equality/invisible 11.jpg|Invisible Girls 11]
            </div>
            <div class="half">
              [image|gender-equality/invisible 12.jpg|Invisible Girls 12]
            </div>
            <div class="half">
              [image|gender-equality/invisible 13.jpg|Invisible Girls 13]
            </div>
            <div class="half">
              [image|gender-equality/invisible 14.jpg|Invisible Girls 14]
            </div>
            <div class="half">
              [image|gender-equality/invisible 15.jpg|Invisible Girls 15]
            </div>
            <div class="half">
              [image|gender-equality/invisible 16.jpg|Invisible Girls 16]
            </div>
            <div class="half">
              [image|gender-equality/invisible 17.jpg|Invisible Girls 17]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        audio: [
          {
            filename: 'invisible-girls/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
            <div class="comic-grid">
            <div class="half">
              [image|gender-equality/invisible 18.jpg|Invisible Girls 18]
            </div>
            <div class="half">
              [image|gender-equality/invisible 19.jpg|Invisible Girls 19]
            </div>
            <div class="half">
              [image|gender-equality/invisible 20.jpg|Invisible Girls 20]
            </div>
            <div class="half">
              [image|gender-equality/invisible 21.jpg|Invisible Girls 21]
            </div>
            <div class="half">
              [image|gender-equality/invisible 22.jpg|Invisible Girls 22]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        audio: [
          {
            filename: 'invisible-girls/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|gender-equality/invisible 23.jpg|Invisible Girls 23]
            </div>
            <div class="half">
              [image|gender-equality/invisible 24.jpg|Invisible Girls 24]
            </div>
            <div class="half">
              [image|gender-equality/invisible 25.jpg|Invisible Girls 25]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage] 
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=NZB9Kh0za7E" target="_blank">UN Sustainable Development Goal&nbsp;5</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Infographic',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 55
          }
        ]
      },
      {
        id: 55,
        taskId: 5000,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 5010,
        title: 'Task: Image Choice',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 55
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 5020,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 5030,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 5040,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 100
          }
        ]
      },
      {
        id: 100,
        taskId: 5050,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 90
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 110
          }
        ]
      },
      {
        id: 110,
        taskId: 5060,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 100
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 120
          }
        ]
      },
      {
        id: 120,
        taskId: 5070,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 110
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
    id: 70,
    title: 'Nuclear Power',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/energy/',
    UNGoalImage: 'un-goals/E-Goal-07-1024x1024.png',
    description: 'This is another empty story.',
    preview: 'nuclear-power/cover.jpg',
    color: 'rgb(255, 209, 0)',
    numberImage: 'nuclear-power/number.png',
    tasks: [
      {
        id: 7000,
        name: 'Choose the correct image',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: false,
            question: 'Choose the images that do not belong in the introduction.',
            answers: [
              {
                text: 'Examples',
                image: 'info-graphics/basic-essay-structure-9.jpg',
                correct: true
              },
              {
                text: 'Rephrase Topic',
                image: 'info-graphics/basic-essay-structure-1.jpg'
              },
              {
                text: 'Summary',
                image: 'info-graphics/basic-essay-structure-conclusion-2.jpg',
                correct: true
              }
            ]
          },
          {
            singleChoice: false,
            question: 'Choose the images that do not belong in the main body paragraph',
            answers: [
              {
                text: 'Answer the Question',
                image: 'info-graphics/basic-essay-structure-2.jpg',
                correct: true
              },
              {
                text: 'Summary',
                image: 'info-graphics/basic-essay-structure-conclusion-2.jpg',
                correct: true
              },
              {
                text: 'Topic Sentence',
                image: 'info-graphics/basic-essay-structure-7.jpg'
              }
            ]
          },
          {
            singleChoice: false,
            question: 'Choose the images that do not belong in the conclusion',
            answers: [
              {
                text: 'Concluding Sentence',
                image: 'info-graphics/basic-essay-structure-10.jpg',
                correct: true
              },
              {
                text: 'Conclusion',
                image: 'info-graphics/basic-essay-structure-conclusion-1.jpg'
              },
              {
                text: 'Explanations',
                image: 'info-graphics/basic-essay-structure-8.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 7010,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels of the introduction of this essay into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'nuclear-power/nuclear 01.jpg'
          },
          {
            order: 1,
            image: 'nuclear-power/nuclear 02.jpg'
          },
          {
            order: 2,
            image: 'nuclear-power/nuclear 03.jpg'
          },
          {
            order: 3,
            image: 'nuclear-power/nuclear 04.jpg'
          },
          {
            order: 4,
            image: 'nuclear-power/nuclear 05.jpg'
          }
        ]
      },
      {
        id: 7020,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels of this essay paragraph into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'nuclear-power/nuclear 06.jpg'
          },
          {
            order: 1,
            image: 'nuclear-power/nuclear 07.jpg'
          },
          {
            order: 2,
            image: 'nuclear-power/nuclear 08.jpg'
          },
          {
            order: 3,
            image: 'nuclear-power/nuclear 09.jpg'
          },
          {
            order: 4,
            image: 'nuclear-power/nuclear 10.jpg'
          },
          {
            order: 5,
            image: 'nuclear-power/nuclear 11.jpg'
          },
          {
            order: 6,
            image: 'nuclear-power/nuclear 12.jpg'
          },
          {
            order: 7,
            image: 'nuclear-power/nuclear 13.jpg'
          },
          {
            order: 8,
            image: 'nuclear-power/nuclear 14.jpg'
          },
          {
            order: 9,
            image: 'nuclear-power/nuclear 15.jpg'
          }
        ]
      },
      {
        id: 7030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-9.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'nuclear-power/nuclear 20.jpg',
                correct: true
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 23.jpg'
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 24.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 7040,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-6.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'nuclear-power/nuclear 05.jpg'
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 22.jpg',
                correct: true
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 20.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 7050,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'nuclear-power/nuclear 16.jpg',
                correct: true
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 20.jpg'
              },
              {
                text: '',
                image: 'nuclear-power/nuclear 21.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Nuclear Power',
        examQuestion: '<p class="last">The threat of nuclear weapons keeps world peace. Nuclear power supplies cheap and clean energy. The benefits of nuclear technology far outweigh the disadvantages.</p><p>To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your knowledge or experience.</p>',
        audio: [
          {
            filename: 'affordable-energy/introduction.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|nuclear-power/nuclear 01.jpg|Nuclear Power 1]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 02.jpg|Nuclear Power 2]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 03.jpg|Nuclear Power 3]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 04.jpg|Nuclear Power 4]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 05.jpg|Nuclear Power 5]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'affordable-energy/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|nuclear-power/nuclear 06.jpg|Nuclear Power 6]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 07.jpg|Nuclear Power 7]
            </div>
            <div class="half">
            [image|nuclear-power/nuclear 08.jpg|Nuclear Power 8]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 09.jpg|Nuclear Power 9]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 10.jpg|Nuclear Power 10]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 11.jpg|Nuclear Power 11]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 12.jpg|Nuclear Power 12]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 13.jpg|Nuclear Power 13]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 14.jpg|Nuclear Power 14]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 15.jpg|Nuclear Power 15]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        audio: [
          {
            filename: 'affordable-energy/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|nuclear-power/nuclear 16.jpg|Nuclear Power 16]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 17.jpg|Nuclear Power 17]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 18.jpg|Nuclear Power 18]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 19.jpg|Nuclear Power 19]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 20.jpg|Nuclear Power 20]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 21.jpg|Nuclear Power 21]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 22.jpg|Nuclear Power 22]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        audio: [
          {
            filename: 'affordable-energy/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|nuclear-power/nuclear 23.jpg|Nuclear Power 23]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 24.jpg|Nuclear Power 24]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 25.jpg|Nuclear Power 25]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=mmSbX1Rg2L0" target="_blank">UN Sustainable Development Goal&nbsp;7</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Infographic',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 7000,
        title: 'Task: Image Choice',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 7010,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 7020,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 7030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 100
          }
        ]
      },
      {
        id: 100,
        taskId: 7040,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 90
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 110
          }
        ]
      },
      {
        id: 110,
        taskId: 7050,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 100
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
    id: 80,
    title: 'Decent Work',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/economic-growth/',
    UNGoalImage: 'un-goals/E-Goal-08-1024x1024.png',
    description: 'Sustained and inclusive economic growth can drive progress, create decent jobs for all and improve living standards.',
    preview: 'decent-work/cover.jpg',
    color: 'rgb(226, 10, 127)',
    numberImage: 'decent-work/number.png',
    tasks: [
      {
        id: 8000,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-1.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'decent-work/decent-work-01.jpg',
                correct: true
              },
              {
                text: '',
                image: 'decent-work/decent-work-12.jpg'
              },
              {
                text: '',
                image: 'decent-work/decent-work-13.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 8010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-2.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'decent-work/decent-work-16.jpg'
              },
              {
                text: '',
                image: 'decent-work/decent-work-05.jpg'
              },
              {
                text: '',
                image: 'decent-work/decent-work-02.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 8020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-9.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'decent-work/decent-work-07.jpg',
                correct: true
              },
              {
                text: '',
                image: 'decent-work/decent-work-18.jpg'
              },
              {
                text: '',
                image: 'decent-work/decent-work-15.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 8030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-conclusion-1.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'decent-work/decent-work-05.jpg'
              },
              {
                text: '',
                image: 'decent-work/decent-work-17.jpg',
                correct: true
              },
              {
                text: '',
                image: 'decent-work/decent-work-15.jpg'
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Decent Work',
        examQuestion: '<p>"People should realise that decent work and economic growth are closely linked."</p><p class="last">Please discuss this statement.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-01.jpg|Decent Work 1]
            </div>
            <div class="half">
              [image|decent-work/decent-work-02.jpg|Decent Work 2]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-03.jpg|Decent Work 3]
            </div>
            <div class="half">
              [image|decent-work/decent-work-04.jpg|Decent Work 4]
            </div>
            <div class="half">
              [image|decent-work/decent-work-05.jpg|Decent Work 5]
            </div>
            <div class="half">
              [image|decent-work/decent-work-06.jpg|Decent Work 6]
            </div>
            <div class="half">
              [image|decent-work/decent-work-07.jpg|Decent Work 7]
            </div>
            <div class="half">
              [image|decent-work/decent-work-08.jpg|Decent Work 8]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-09.jpg|Decent Work 9]
            </div>
            <div class="half">
              [image|decent-work/decent-work-10.jpg|Decent Work 10]
            </div>
            <div class="half">
              [image|decent-work/decent-work-11.jpg|Decent Work 11]
            </div>
            <div class="half">
              [image|decent-work/decent-work-12.jpg|Decent Work 12]
            </div>
            <div class="half">
              [image|decent-work/decent-work-13.jpg|Decent Work 13]
            </div>
            <div class="half">
              [image|decent-work/decent-work-14.jpg|Decent Work 14]
            </div>
            <div class="half">
              [image|decent-work/decent-work-15.jpg|Decent Work 15]
            </div>
            <div class="half">
              [image|decent-work/decent-work-16.jpg|Decent Work 16]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-17.jpg|Decent Work 17]
            </div>
            <div class="half">
              [image|decent-work/decent-work-18.jpg|Decent Work 18]
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
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=NqI3tmF-o30" target="_blank">UN Sustainable Development Goal&nbsp;8</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 8000,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 8010,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 8020,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 8030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
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
    id: 110,
    title: 'Transport',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/cities/',
    UNGoalImage: 'un-goals/E-Goal-11-1024x1024.png',
    description: 'This is an essay on transport.',
    preview: 'transports/cover.jpg',
    color: 'rgb(198, 32, 39)',
    numberImage: 'transports/number.png',
    tasks: [
      {
        id: 1100,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-2.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'transports/transports 04.jpg',
                correct: true
              },
              {
                text: '',
                image: 'transports/transports 09.jpg'
              },
              {
                text: '',
                image: 'transports/transports 10.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1110,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-conclusion-1.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'transports/transports 07.jpg'
              },
              {
                text: '',
                image: 'transports/transports 13.jpg'
              },
              {
                text: '',
                image: 'transports/transports 21.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 1120,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-9.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'transports/transports 04.jpg'
              },
              {
                text: '',
                image: 'transports/transports 07.jpg'
              },
              {
                text: '',
                image: 'transports/transports 14.jpg',
                correct: true
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Transport',
        audio: [
          {
            filename: 'transport/intro.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Local government should invest money in public transport to make it free and accessible to everyone, no matter their physical ability, age or wealth, and to contribute to more sustainable cities and communities for the future.</p><p class="last">Do you agree or disagree?</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|transports/transports 01.jpg|Transport 1]
            </div>
            <div class="half">
              [image|transports/transports 02.jpg|Transport 2]
            </div>
            <div class="half">
              [image|transports/transports 03.jpg|Transport 3]
            </div>
            <div class="half">
              [image|transports/transports 04.jpg|Transport 4]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        audio: [
          {
            filename: 'transport/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|transports/transports 05.jpg|Transport 5]
            </div>
            <div class="half">
              [image|transports/transports 06.jpg|Transport 6]
            </div>
            <div class="half">
              [image|transports/transports 07.jpg|Transport 7]
            </div>
            <div class="half">
              [image|transports/transports 08.jpg|Transport 8]
            </div>
            <div class="half">
              [image|transports/transports 09.jpg|Transport 9]
            </div>
            <div class="half">
              [image|transports/transports 10.jpg|Transport 10]
            </div>
            <div class="half">
              [image|transports/transports 11.jpg|Transport 11]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        title: '',
        audio: [
          {
            filename: 'transport/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
        <div class="comic-grid">
          <div class="half">
            [image|transports/transports 12.jpg|Transport 12]
          </div>
          <div class="half">
            [image|transports/transports 13.jpg|Transport 13]
          </div>
          <div class="half">
            [image|transports/transports 14.jpg|Transport 14]
          </div>
          <div class="half">
            [image|transports/transports 15.jpg|Transport 15]
          </div>
          <div class="half">
            [image|transports/transports 16.jpg|Transport 16]
          </div>
          <div class="half">
            [image|transports/transports 17.jpg|Transport 17]
          </div>
        </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        title: '',
        audio: [
          {
            filename: 'transport/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|transports/transports 18.jpg|Transport 18]
            </div>
            <div class="half">
              [image|transports/transports 19.jpg|Transport 19]
            </div>
            <div class="half">
              [image|transports/transports 20.jpg|Transport 20]
            </div>
            <div class="half">
              [image|transports/transports 21.jpg|Transport 21]
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
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=-4iGPnF0Wzw" target="_blank">UN Sustainable Development Goal&nbsp;11</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        taskId: 1100,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 1110,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 1120,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
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
    id: 130,
    title: 'Climate Action',
    description: 'This is a story about climate action.',
    url: 'https://www.un.org/sustainabledevelopment/climate-change/',
    UNGoalImage: 'un-goals/E-Goal-13-1024x1024.png',
    author: 'CIELL Team',
    preview: 'climate-change/cover.jpg',
    color: 'rgb(213, 212, 36)',
    numberImage: 'climate-change/number.png',
    tasks: [
      {
        id: 1300,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-2.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'climate-change/climate 06.jpg',
                correct: true
              },
              {
                text: '',
                image: 'climate-change/climate 11.jpg'
              },
              {
                text: '',
                image: 'climate-change/climate 13.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1310,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-conclusion-1.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'climate-change/climate 08.jpg'
              },
              {
                text: '',
                image: 'climate-change/climate 17.jpg',
                correct: true
              },
              {
                text: '',
                image: 'climate-change/climate 11.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 1320,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'climate-change/climate 01.jpg'
              },
              {
                text: '',
                image: 'climate-change/climate 04.jpg'
              },
              {
                text: '',
                image: 'climate-change/climate 11.jpg',
                correct: true
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Climate Action',
        audio: [
          {
            filename: 'climate-action/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Greta Thunberg is a schoolgirl turned activist who has encouraged millions of young people to join in her school strike for climate change every Friday.</p><p class="last">Do you believe school pupils are right to skip school in order to protest for climate change?</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|climate-change/climate 01.jpg|Climate Change 1]
            </div>
            <div class="half">
              [image|climate-change/climate 02.jpg|Climate Change 2]
            </div>
            <div class="half">
              [image|climate-change/climate 03.jpg|Climate Change 3]
            </div>
            <div class="half">
              [image|climate-change/climate 04.jpg|Climate Change 4]
            </div>
            <div class="half">
              [image|climate-change/climate 05.jpg|Climate Change 5]
            </div>
            <div class="half">
              [image|climate-change/climate 06.jpg|Climate Change 6]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        audio: [
          {
            filename: 'climate-action/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|climate-change/climate 07.jpg|Climate Change 7]
            </div>
            <div class="half">
              [image|climate-change/climate 08.jpg|Climate Change 8]
            </div>
            <div class="half">
              [image|climate-change/climate 09.jpg|Climate Change 9]
            </div>
            <div class="half">
              [image|climate-change/climate 10.jpg|Climate Change 10]
            </div>
            <div class="half">
              [image|climate-change/climate 11.jpg|Climate Change 11]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        audio: [
          {
            filename: 'climate-action/paragraph-3.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|climate-change/climate 12.jpg|Climate Change 12]
            </div>
            <div class="half">
              [image|climate-change/climate 13.jpg|Climate Change 13]
            </div>
            <div class="half">
              [image|climate-change/climate 14.jpg|Climate Change 14]
            </div>
            <div class="half">
              [image|climate-change/climate 15.jpg|Climate Change 15]
            </div>
            <div class="half">
              [image|climate-change/climate 16.jpg|Climate Change 16]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        audio: [
          {
            filename: 'climate-action/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|climate-change/climate 17.jpg|Climate Change 17]
            </div>
            <div class="half">
              [image|climate-change/climate 18.jpg|Climate Change 18]
            </div>
            <div class="half">
              [image|climate-change/climate 19.jpg|Climate Change 19]
            </div>
            <div class="half">
              [image|climate-change/climate 20.jpg|Climate Change 20]
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
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=xivQ8zjqaRo" target="_blank">UN Sustainable Development Goal&nbsp;13</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        taskId: 1300,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 1310,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 1320,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
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
    id: 160,
    title: 'Cipta',
    description: 'This is a story about a girl named Cipta.',
    url: 'https://www.un.org/sustainabledevelopment/peace-justice/',
    UNGoalImage: 'un-goals/E-Goal-16-1024x1024.png',
    author: 'CIELL Team',
    preview: 'cipta/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'cipta/number.png',
    tasks: [
      {
        id: 16000,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'cipta/Cipta 10.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 13.jpg',
                correct: true
              },
              {
                text: '',
                image: 'cipta/Cipta 15.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 16010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'cipta/Cipta 13.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 15.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 10.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 16020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-5.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'cipta/Cipta 12.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 11.jpg',
                correct: true
              },
              {
                text: '',
                image: 'cipta/Cipta 13.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 16030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-6.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'cipta/Cipta 13.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 10.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 12.jpg',
                correct: true
              }
            ]
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Cipta',
        examQuestion: '<p>You belong to an English-language reading group which recently read a book in a book contest. You have agreed to write a review of the book for the group’s website. In your review you should give your opinion of the format used for the book and say whether you think a book contest could be used to enhance students\' interest, in general.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 01.jpg|Cipta 1]
            </div>
            <div class="half">
              [image|cipta/Cipta 02.jpg|Cipta 2]
            </div>
            <div class="half">
              [image|cipta/Cipta 03.jpg|Cipta 3]
            </div>
            <div class="half">
              [image|cipta/Cipta 04.jpg|Cipta 4]
            </div>
            <div class="half">
              [image|cipta/Cipta 05.jpg|Cipta 5]
            </div>
            <div class="half">
              [image|cipta/Cipta 06.jpg|Cipta 6]
            </div>
            <div class="half">
              [image|cipta/Cipta 07.jpg|Cipta 7]
            </div>
            <div class="half">
              [image|cipta/Cipta 08.jpg|Cipta 8]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 09.jpg|Cipta 9]
            </div>
            <div class="half">
              [image|cipta/Cipta 10.jpg|Cipta 10]
            </div>
            <div class="half">
              [image|cipta/Cipta 11.jpg|Cipta 11]
            </div>
            <div class="half">
              [image|cipta/Cipta 12.jpg|Cipta 12]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 13.jpg|Cipta 13]
            </div>
            <div class="half">
              [image|cipta/Cipta 14.jpg|Cipta 14]
            </div>
            <div class="half">
              [image|cipta/Cipta 15.jpg|Cipta 15]
            </div>
            <div class="half">
              [image|cipta/Cipta 16.jpg|Cipta 16]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 17.jpg|Cipta 17]
            </div>
            <div class="half">
              [image|cipta/Cipta 18.jpg|Cipta 18]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=Ww_B0mvGiYc" target="_blank">UN Sustainable Development Goal&nbsp;16</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 16000,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 16010,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 16020,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 16030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
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
    id: 170,
    title: 'Food Poverty',
    description: 'This is a story about a food poverty.',
    url: 'https://www.un.org/sustainabledevelopment/hunger/',
    UNGoalImage: 'un-goals/E-Goal-02-1024x1024.png',
    author: 'CIELL Team',
    preview: 'food-poverty/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'food-poverty/number.png',
    tasks: [
      {
        id: 17010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'food-poverty/food-poverty-6.jpg',
                correct: true
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-1.jpg'
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-9.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 17020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'food-poverty/food-poverty-9.jpg'
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-10.jpg'
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-5.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 17030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-10.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'food-poverty/food-poverty-14.jpg',
                correct: true
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-11.jpg'
              },
              {
                text: '',
                image: 'food-poverty/food-poverty-1.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 17040,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'food-poverty/food-poverty-1.jpg'
          },
          {
            order: 1,
            image: 'food-poverty/food-poverty-2.jpg'
          },
          {
            order: 2,
            image: 'food-poverty/food-poverty-3.jpg'
          },
          {
            order: 3,
            image: 'food-poverty/food-poverty-4.jpg'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Food Poverty',
        examQuestion: '<p>A film magazine is running a series on International Cinema.  It has invited readers to send in reviews of films set in their own country.  You decide to send in a review of such a film considering how effectively the film illustrates particular aspects of life and attitudes in your country.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-1.jpg|Food Poverty 1]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-2.jpg|Food Poverty 2]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-3.jpg|Food Poverty 3]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-4.jpg|Food Poverty 4]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-5.jpg|Food Poverty 5]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-6.jpg|Food Poverty 6]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-7.jpg|Food Poverty 7]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-8.jpg|Food Poverty 8]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-9.jpg|Food Poverty 9]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-10.jpg|Food Poverty 10]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-11.jpg|Food Poverty 11]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-12.jpg|Food Poverty 12]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-13.jpg|Food Poverty 13]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-14.jpg|Food Poverty 14]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-15.jpg|Food Poverty 15]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-16.jpg|Food Poverty 16]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=iteCytv0RqY" target="_blank">UN Sustainable Development Goal&nbsp;2</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 17010,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 17020,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 17030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 17040,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
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
    id: 180,
    title: 'ENABLE Festival',
    description: 'This is a story about a the ENABLE Festival.',
    url: 'https://www.un.org/sustainabledevelopment/globalpartnerships/',
    UNGoalImage: 'un-goals/E-Goal-17-1024x1024.png',
    author: 'CIELL Team',
    preview: 'enable-festival/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'enable-festival/number.png',
    tasks: [
      {
        id: 18010,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-4.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'enable-festival/enable-festival-13.jpg'
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-13.jpg'
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-12.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 18020,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-3.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'enable-festival/enable-festival-5.jpg',
                correct: true
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-15.jpg'
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-2.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 18030,
        name: 'Choose the panel that matches',
        type: 'image-choice',
        typeName: 'Image Choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Choose the panel that matches',
            answerTitle: 'Choose one of the following panels',
            images: [
              'info-graphics/basic-essay-structure-6.jpg'
            ],
            answers: [
              {
                text: '',
                image: 'enable-festival/enable-festival-13.jpg'
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-14.jpg',
                correct: true
              },
              {
                text: '',
                image: 'enable-festival/enable-festival-12.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 18040,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'enable-festival/enable-festival-1.jpg'
          },
          {
            order: 1,
            image: 'enable-festival/enable-festival-2.jpg'
          },
          {
            order: 2,
            image: 'enable-festival/enable-festival-3.jpg'
          },
          {
            order: 3,
            image: 'enable-festival/enable-festival-4.jpg'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'ENABLE Festival',
        examQuestion: '<p>You belong to an English-language reading group which recently attended a short-film festival. You have agreed to write a review of the festival for the group’s website. In your review you should give your opinion of the festival and say whether you think short videos are a good way of disseminating an idea, in general.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-1.jpg|ENABLE Festival 1]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-2.jpg|ENABLE Festival 2]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-3.jpg|ENABLE Festival 3]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-4.jpg|ENABLE Festival 4]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-5.jpg|ENABLE Festival 5]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-6.jpg|ENABLE Festival 6]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-7.jpg|ENABLE Festival 7]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-8.jpg|ENABLE Festival 8]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-9.jpg|ENABLE Festival 9]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-10.jpg|ENABLE Festival 10]
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
            'chapterId': 20
          }
        ]
      },
      {
        id: 20,
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-11.jpg|ENABLE Festival 11]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-12.jpg|ENABLE Festival 12]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-13.jpg|ENABLE Festival 13]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-14.jpg|ENABLE Festival 14]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 10
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
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-15.jpg|ENABLE Festival 15]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-16.jpg|ENABLE Festival 16]
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
            'text': 'Infographic',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: `<h2 class="separator dotted-border">1. Introduction</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-1.jpg|Basic Essay Structure 1]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-2.jpg|Basic Essay Structure 2]
            </div>
          </div>
          <h2 class="separator dotted-border">2. Body</h2>
          <h3 class="separator">Paragraph 1</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-3.jpg|Basic Essay Structure 3]
            </div>
            <div class="half last arrow">
              [image|info-graphics/basic-essay-structure-4.jpg|Basic Essay Structure 4]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-5.jpg|Basic Essay Structure 5]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-6.jpg|Basic Essay Structure 6]
            </div>
          </div>
          <h3 class="separator">Paragraph 2</h3>
          <div class="comic-grid narrow">
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-7.jpg|Basic Essay Structure 7]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-8.jpg|Basic Essay Structure 8]
            </div>
            <div class="half arrow">
              [image|info-graphics/basic-essay-structure-9.jpg|Basic Essay Structure 9]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-10.jpg|Basic Essay Structure 10]
            </div>
          </div>
          <h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
          <p style="text-align:center">Feel free to add more paragraphs!</p>
          <h2 class="separator dotted-border">3. Conclusion</h2>
          <div class="comic-grid narrow">
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Basic Essay Structure 7]
            </div>
            <div class="half">
              [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Basic Essay Structure 8]
            </div>
          </div>
          `,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        title: '',
        content: `[tasks]
          <div class="further-reading">
            [UNGoalImage]
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=56twmO4VFvk" target="_blank">UN Sustainable Development Goal&nbsp;17</a>.</p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 40
          },
          {
            'text': 'Tasks',
            'class': 'next',
            'iconBefore': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 18010,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 50
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        taskId: 18020,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 60
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 18030,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 70
          },
          {
            'text': 'Next',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 90
          }
        ]
      },
      {
        id: 90,
        taskId: 18040,
        title: 'Task: Matching Panel',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 80
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
  }
]

export default Story
