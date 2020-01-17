let Story = [
  {
    id: 40,
    title: 'The Invisible Girls',
    author: 'CIELL Team',
    description: 'This is just a very short demo story. It is pretty much about nothing.',
    preview: 'gender-equality/cover.png',
    color: 'rgb(65, 84, 108)',
    tasks: [
      {
        id: 20,
        type: 'multiple-choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Which object is the heaviest?',
            answers: [
              {
                text: 'A feather'
              },
              {
                text: 'A spaceship',
                correct: true
              },
              {
                text: 'A car'
              }
            ]
          },
          {
            question: 'What is the color of a ripe tomato?',
            answers: [
              {
                text: 'Green'
              },
              {
                text: 'Red',
                correct: true
              },
              {
                text: 'I don\'t know...'
              },
              {
                text: 'Red again, also true!',
                correct: true
              }
            ]
          },
          {
            question: 'How many sides has a rectangle?',
            singleChoice: true,
            answers: [
              {
                text: 'One'
              },
              {
                text: 'Two'
              },
              {
                text: 'Three'
              },
              {
                text: 'Four',
                correct: true
              }
            ]
          },
          {
            question: 'Select all words that contain the letter "E"',
            answers: [
              {
                text: 'Elephant',
                correct: true
              },
              {
                text: 'Piano'
              },
              {
                text: 'General',
                correct: true
              },
              {
                text: 'Bruce Lee',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 30,
        type: 'sort',
        title: '',
        description: '',
        items: [
          {
            order: 10,
            title: 'Introduction',
            class: 'introduction'
          },
          {
            order: 20,
            title: 'Paragraph 1',
            class: 'paragraph'
          },
          {
            order: 30,
            title: 'Paragraph 2',
            class: 'paragraph'
          },
          {
            order: 40,
            title: 'Paragraph 3',
            class: 'paragraph'
          },
          {
            order: 50,
            title: 'Conclusion',
            class: 'conclusion'
          }
        ]
      },
      {
        id: 40,
        type: 'image-choice',
        title: '',
        description: '',
        items: [
          {
            singleChoice: true,
            question: 'Which object is the heaviest?',
            answers: [
              {
                text: 'A feather',
                image: 'gender-equality/invisible 08.png'
              },
              {
                text: 'A spaceship',
                image: 'gender-equality/invisible 09.png',
                correct: true
              },
              {
                text: 'A car',
                image: 'gender-equality/invisible 10.png'
              }
            ]
          },
          {
            question: 'What is the color of a ripe tomato?',
            answers: [
              {
                text: 'Green',
                image: 'gender-equality/invisible 03.png'
              },
              {
                text: 'Red',
                image: 'gender-equality/invisible 04.png',
                correct: true
              },
              {
                text: 'I don\'t know...',
                image: 'gender-equality/invisible 05.png'
              },
              {
                text: 'Red again, also true!',
                image: 'gender-equality/invisible 06.png',
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
        title: 'The Invisible Girls',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half text info info--introduction">
              <h2>Introduction</h2><p>Essay <strong>introduction</strong> is your roadmap for the entire essay. It is a beginning paragraph that sets tone and path for the entire paper you are going to present to your reader. A good introduction to essay catches attention and makes your reader engaged right from the very start.</p>
            </div>
            <div class="half">
              [image|gender-equality/invisible 00.png|Invisible Girls 0]
            </div>
            <div class="half">
              [image|gender-equality/invisible 02.png|Invisible Girls 2]
            </div>
            <div class="half">
              [image|gender-equality/invisible 03.png|Invisible Girls 3]
            </div>
            <div class="half">
              [image|gender-equality/invisible 04.png|Invisible Girls 4]
            </div>
            <div class="half">
              [image|gender-equality/invisible 05.png|Invisible Girls 5]
            </div>
            <div class="half">
              [image|gender-equality/invisible 06.png|Invisible Girls 6]
            </div>
            <div class="half">
              [image|gender-equality/invisible 07.png|Invisible Girls 7]
            </div>
            <div class="half">
              [image|gender-equality/invisible 08.png|Invisible Girls 8]
            </div>
            <div class="half">
              [image|gender-equality/invisible 09.png|Invisible Girls 9]
            </div>
          </div>`,
        choices: [
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
        content: `
            <div class="comic-grid" style="margin-top:1.5em">
            <div class="half text info info--paragraph">
              <h2>Paragraphs</h2><p>The <strong>body</strong> of the essay is the part that addresses the title. It should be organised into <strong>paragraphs</strong>. Each
              paragraph should deal with a different aspect of the issue, but each paragraph should also link in some
              way to those that precede and follow it.</p>
            </div>
            <div class="half">
              [image|gender-equality/invisible 10.png|Invisible Girls 10]
            </div>
            <div class="half">
              [image|gender-equality/invisible 11.png|Invisible Girls 11]
            </div>
            <div class="half">
              [image|gender-equality/invisible 12.png|Invisible Girls 12]
            </div>
            <div class="half">
              [image|gender-equality/invisible 13.png|Invisible Girls 13]
            </div>
            <div class="half">
              [image|gender-equality/invisible 14.png|Invisible Girls 14]
            </div>
            <div class="half">
              [image|gender-equality/invisible 15.png|Invisible Girls 15]
            </div>
            <div class="half">
              [image|gender-equality/invisible 16.png|Invisible Girls 16]
            </div>
            <div class="half">
              [image|gender-equality/invisible 17.png|Invisible Girls 17]
            </div>
            <div class="half">
              [image|gender-equality/invisible 18.png|Invisible Girls 18]
            </div>
            <div class="half">
              [image|gender-equality/invisible 19.png|Invisible Girls 19]
            </div>
            <div class="half">
              [image|gender-equality/invisible 20.png|Invisible Girls 20]
            </div>
            <div class="half">
              [image|gender-equality/invisible 21.png|Invisible Girls 21]
            </div>
            <div class="half">
              [image|gender-equality/invisible 22.png|Invisible Girls 22]
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
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        title: '',
        content: `
            <div class="comic-grid" style="margin-top:1.5em">
            <div class="half text info info--conclusion">
            <h2>Conslusion</h2><p>The <strong>conclusion</strong> reminds your readers what the essay was meant to do. It provides an answer to the title. It reminds your readers how you reached that answer. The conclusion should normally occupy just one paragraph. Here’s a simple conclusion to our story.</p>
            </div>
            <div class="half">
              [image|gender-equality/invisible 23.png|Invisible Girls 23]
            </div>
            <div class="half">
              [image|gender-equality/invisible 24.png|Invisible Girls 24]
            </div>
            <div class="half">
              [image|gender-equality/invisible 25.png|Invisible Girls 25]
            </div>
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
            'chapterId': 70
          }
        ]
      },
      {
        id: 70,
        title: 'Info Graphic: Basic Essay Structure',
        titleClass: 'center',
        content: `<p>A basic essay consists of three main parts: <span style="display:inline-block;background:#c2f4f1;padding:0 2px;"><strong>introduction</strong></span>, <span style="display:inline-block;background:#fdb413;padding:0 2px;"><strong>body</strong></span>, and <span style="display:inline-block;background:#d4f0a5;padding:0 2px;"><strong>conclusion</strong></span>. Following this format will
        help you write and organize an essay. However, flexibility is important. While keeping this basic essay
        format in mind, let the topic and specific assignment guide the writing and organization.</p>
          <h2 class="separator dotted-border">1. Introduction</h2>
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
            'chapterId': 60
          },
          {
            'text': 'Task',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 80
          }
        ]
      },
      {
        id: 80,
        taskId: 30,
        title: 'Task: The Invisible Girls',
        content: `<p style="margin-bottom:1em"><strong>Instructions:</strong> Place the following story elements in their correct order (drag &amp; drop) and click the "Check order" button.</p>`,
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
            'chapterId': 85
          }
        ]
      },
      {
        id: 85,
        taskId: 20,
        title: 'Task: Multiple Choice',
        content: `<p style="margin-bottom:1em"><strong>Instructions:</strong> Answer the following questions and click the "Check answers" button.</p>`,
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
            'chapterId': 87
          }
        ]
      },
      {
        id: 87,
        taskId: 40,
        title: 'Task: Image Choice',
        content: `<p style="margin-bottom:1em"><strong>Instructions:</strong> Answer the following questions and click the "Check answers" button.</p>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 85
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
        title: 'Evaluation: The Invisible Girls',
        content: `<p>This chapter will contain the evaluation for this story.</p>`,
        audio: [
          {
            filename: 'sine-wave.mp3',
            label: 'Audio Content'
          }
        ],
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 87
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
    title: 'Climate Change',
    description: 'This is a story about climate change.',
    author: 'CIELL Team',
    preview: 'climate-change/cover.png',
    color: 'rgb(113, 104, 123)',
    tasks: null,
    chapters: [
      {
        id: 0,
        title: 'Climate Change',
        audio: [
          {
            filename: 'sine-wave.mp3',
            label: 'Audio Content'
          }
        ],
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|climate-change/climate 01.png|Climate Change 1]
            </div>
            <div class="half">
              [image|climate-change/climate 02.png|Climate Change 2]
            </div>
            <div class="half">
              [image|climate-change/climate 03.png|Climate Change 3]
            </div>
            <div class="half">
              [image|climate-change/climate 04.png|Climate Change 4]
            </div>
            <div class="half">
              [image|climate-change/climate 05.png|Climate Change 5]
            </div>
            <div class="half">
              [image|climate-change/climate 06.png|Climate Change 6]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|climate-change/climate 07.png|Climate Change 7]
            </div>
            <div class="half">
              [image|climate-change/climate 08.png|Climate Change 8]
            </div>
            <div class="half">
              [image|climate-change/climate 09.png|Climate Change 9]
            </div>
            <div class="half">
              [image|climate-change/climate 10.png|Climate Change 10]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|climate-change/climate 11.png|Climate Change 11]
            </div>
            <div class="half">
              [image|climate-change/climate 12.png|Climate Change 12]
            </div>
            <div class="half">
              [image|climate-change/climate 13.png|Climate Change 13]
            </div>
            <div class="half">
              [image|climate-change/climate 14.png|Climate Change 14]
            </div>
            <div class="half">
              [image|climate-change/climate 15.png|Climate Change 15]
            </div>
            <div class="half">
              [image|climate-change/climate 16.png|Climate Change 16]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|climate-change/climate 17.png|Climate Change 17]
            </div>
            <div class="half">
              [image|climate-change/climate 18.png|Climate Change 18]
            </div>
            <div class="half">
              [image|climate-change/climate 19.png|Climate Change 19]
            </div>
            <div class="half">
              [image|climate-change/climate 20.png|Climate Change 20]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconAfter': 'arrow-left',
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
    id: 20,
    title: 'Nuclear Power',
    author: 'CIELL Team',
    description: 'This is another empty story.',
    preview: 'nuclear-power/cover.png',
    color: 'rgb(240, 78, 79)',
    chapters: [
      {
        id: 0,
        title: 'Nuclear Power',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half text info info--introduction">
              <h2>Introduction</h2><p>Essay <strong>introduction</strong> is your roadmap for the entire essay. It is a beginning paragraph that sets tone and path for the entire paper you are going to present to your reader. A good introduction to essay catches attention and makes your reader engaged right from the very start.</p>
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 01.png|Nuclear Power 1]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 02.png|Nuclear Power 2]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 03.png|Nuclear Power 3]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 04.png|Nuclear Power 4]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 05.png|Nuclear Power 5]
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
        title: '',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
          <div class="half">
              [image|nuclear-power/nuclear 06.png|Nuclear Power 6]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 07.png|Nuclear Power 7]
            </div>
            <div class="half">
            [image|nuclear-power/nuclear 08.png|Nuclear Power 8]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 09.png|Nuclear Power 9]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 10.png|Nuclear Power 10]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 11.png|Nuclear Power 11]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 12.png|Nuclear Power 12]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 13.png|Nuclear Power 13]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 14.png|Nuclear Power 14]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 15.png|Nuclear Power 15]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 16.png|Nuclear Power 16]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 17.png|Nuclear Power 17]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 18.png|Nuclear Power 18]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 19.png|Nuclear Power 19]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 20.png|Nuclear Power 20]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 21.png|Nuclear Power 21]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 22.png|Nuclear Power 22]
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
        title: '',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|nuclear-power/nuclear 23.png|Nuclear Power 23]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 24.png|Nuclear Power 24]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 25.png|Nuclear Power 25]
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
    id: 50,
    title: 'Disability',
    author: 'CIELL Team',
    description: 'This is an essay on disability.',
    preview: 'disability/cover.png',
    color: 'rgb(166, 53, 52)',
    chapters: [
      {
        id: 0,
        title: 'Disability',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half text info info--introduction">
              <h2>Introduction</h2><p>Essay <strong>introduction</strong> is your roadmap for the entire essay. It is a beginning paragraph that sets tone and path for the entire paper you are going to present to your reader. A good introduction to essay catches attention and makes your reader engaged right from the very start.</p>
            </div>
            <div class="half">
              [image|disability/disability 01.png|Disability 1]
            </div>
            <div class="half">
              [image|disability/disability 02.png|Disability2]
            </div>
            <div class="half">
              [image|disability/disability 03.png|Disability 3]
            </div>
            <div class="half">
              [image|disability/disability 04.png|Disability 4]
            </div>
            <div class="half">
              [image|disability/disability 05.png|Disability 5]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
          <div class="half">
              [image|disability/disability 06.png|Disability 6]
            </div>
            <div class="half">
              [image|disability/disability 07.png|Disability 7]
            </div>
            <div class="half">
            [image|disability/disability 08.png|Disability 8]
            </div>
            <div class="half">
              [image|disability/disability 09.png|Disability 9]
            </div>
            <div class="half">
              [image|disability/disability 10.png|Disability 10]
            </div>
            <div class="half">
              [image|disability/disability 11.png|Disability 11]
            </div>
            <div class="half">
              [image|disability/disability 12.png|Disability 12]
            </div>
            <div class="half">
              [image|disability/disability 13.png|Disability 13]
            </div>
            <div class="half">
              [image|disability/disability 14.png|Disability 14]
            </div>
            <div class="half">
              [image|disability/disability 15.png|Disability 15]
            </div>
            <div class="half">
              [image|disability/disability 16.png|Disability 16]
            </div>
            <div class="half">
              [image|disability/disability 17.png|Disability 17]
            </div>
            <div class="half">
              [image|disability/disability 18.png|Disability 18]
            </div>
            <div class="half">
              [image|disability/disability 19.png|Disability 19]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|disability/disability 20.png|Disability 20]
            </div>
            <div class="half">
              [image|disability/disability 21.png|Disability21]
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
    id: 60,
    title: 'Transports',
    author: 'CIELL Team',
    description: 'This is an essay on transports.',
    preview: 'transports/cover.png',
    color: 'rgb(62, 57, 63)',
    chapters: [
      {
        id: 0,
        title: 'Transports',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|transports/transports 01.png|Transports 1]
            </div>
            <div class="half">
              [image|transports/transports 02.png|Transports 2]
            </div>
            <div class="half">
              [image|transports/transports 03.png|Transports 3]
            </div>
            <div class="half">
              [image|transports/transports 04.png|Transports 4]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|transports/transports 05.png|Transports 5]
            </div>
            <div class="half">
              [image|transports/transports 06.png|Transports 6]
            </div>
            <div class="half">
              [image|transports/transports 07.png|Transports 7]
            </div>
            <div class="half">
              [image|transports/transports 08.png|Transports 8]
            </div>
            <div class="half">
              [image|transports/transports 09.png|Transports 9]
            </div>
            <div class="half">
              [image|transports/transports 10.png|Transports 10]
            </div>
            <div class="half">
              [image|transports/transports 11.png|Transports 11]
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
        content: `
        <div class="comic-grid" style="margin-top:1.5em">
          <div class="half">
            [image|transports/transports 12.png|Transports 12]
          </div>
          <div class="half">
            [image|transports/transports 13.png|Transports 13]
          </div>
          <div class="half">
            [image|transports/transports 14.png|Transports 14]
          </div>
          <div class="half">
            [image|transports/transports 15.png|Transports 15]
          </div>
          <div class="half">
            [image|transports/transports 16.png|Transports 16]
          </div>
          <div class="half">
            [image|transports/transports 17.png|Transports 17]
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
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|transports/transports 18.png|Transports 18]
            </div>
            <div class="half">
              [image|transports/transports 19.png|Transports 19]
            </div>
            <div class="half">
              [image|transports/transports 20.png|Transports 20]
            </div>
            <div class="half">
              [image|transports/transports 21.png|Transports 21]
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
    title: 'Agatha Christie',
    author: 'CIELL Team',
    description: 'A story on the issue of gender equality.',
    preview: 'agatha-christie/cover.png',
    color: 'rgb(142, 1, 49)',
    tasks: [
      {
        id: 20,
        type: 'puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Instructions:</strong> Place the following story elements in their correct order (drag &amp; drop) and click the "Check order" button.</p>',
        items: [
          {
            order: 0,
            image: 'agatha-christie/agatha 01.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 02.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 03.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 04.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 05.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 06.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 07.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 08.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 09.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 10.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 11.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 12.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 13.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 14.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 15.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 16.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 17.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 18.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 19.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 20.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 21.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 22.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 23.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 24.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 25.png'
          },
          {
            order: 1,
            image: 'agatha-christie/agatha 26.png'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Agatha Christie',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|agatha-christie/agatha 01.png|Agatha 1]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 04.png|Agatha 2]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 05.png|Agatha 3]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 06.png|Agatha 4]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 08.png|Agatha 5]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 09.png|Agatha 6]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 10.png|Agatha 7]
            </div>
            <div class="half">
            [image|agatha-christie/agatha 11.png|Agatha 8]
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
        title: '',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|agatha-christie/agatha 13.png|Agatha 9]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 14.png|Agatha 10]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 17.png|Agatha 11]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 18.png|Agatha 12]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 19.png|Agatha 13]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 20.png|Agatha 14]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 21.png|Agatha 15]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 22.png|Agatha 16]
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
        title: '',
        content: `
          <div class="comic-grid" style="margin-top:1.5em">
            <div class="half">
              [image|agatha-christie/agatha 23.png|Agatha 17]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 24.png|Agatha 18]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 25.png|Agatha 19]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 26.png|Agatha 20]
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
            'text': 'Task',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 40
          }
        ]
      },
      {
        id: 40,
        taskId: 20,
        title: 'Task: Agatha Christie',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 30
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
