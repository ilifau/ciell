let Story = [
  {
    id: 40,
    title: 'The Invisible Girls',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/gender-equality/',
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
        examQuestion: '<p>Due to different gender roles and poverty, teenagers-boys and girls face different challenges at home and schools especially in developing countries.</p><p class="last">Do you agree with this statement? Give examples to support your views.</p>',
        content: `
          <div class="comic-grid">
            <div class="half text info info--introduction">
              <h2>Introduction</h2><p>The <strong>introduction</strong> is the roadmap for the entire piece. It is an initial paragraph that sets the tone and path for your writing. A good introduction catches attention and engages your readers right from the very start.</p>
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
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        content: `
            <div class="comic-grid">
            <div class="half text info info--paragraph">
              <h2>Paragraph 1</h2><p>The <strong>body</strong> of the essay is the part that addresses the question. It should be organised into 2-3 <strong>paragraphs</strong>. Each
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
            <div class="comic-grid">
            <div class="half text info info--paragraph">
              <h2>Paragraph 2</h2><p>Each paragraph begins by introducing an aspect of the issue, then explains the issue and gives <strong>examples</strong>.</p>
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
            <div class="comic-grid">
            <div class="half text info info--conclusion">
            <h2>Conclusion</h2><p>The <strong>conclusion</strong> provides an answer to the question set out in the introduction and reminds the reader of your reasons.</p>
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
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 5: Achieve gender equality and empower all women and girls</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/gender-equality/" target="_blank">https://www.un.org/sustainabledevelopment/gender-equality/</a></p>
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
        content: `<p>A basic essay consists of three main parts: <span style="display:inline-block;background:#c2f4f1;padding:0 2px;"><strong>introduction</strong></span>, <span style="display:inline-block;background:#fdb413;padding:0 2px;"><strong>body</strong></span>, and <span style="display:inline-block;background:#d4f0a5;padding:0 2px;"><strong>conclusion</strong></span>. Following this format will
        help you write and organise an essay. However, flexibility is important. While keeping this basic essay
        format in mind, let the topic and specific assignment guide the writing and organisation.</p>
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
            'chapterId': 30
          },
          {
            'text': 'Task',
            'class': 'next',
            'iconAfter': 'arrow-right',
            'chapterId': 50
          }
        ]
      },
      {
        id: 50,
        taskId: 30,
        title: 'Task: The Invisible Girls',
        content: `<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order then press "Check order".</p>`,
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
        taskId: 20,
        title: 'Task: Multiple Choice',
        content: `<p style="margin-bottom:1em"><strong>Instructions:</strong> Answer the following questions and click the "Check answers" button.</p>`,
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
        taskId: 40,
        title: 'Task: Image Choice',
        content: `<p style="margin-bottom:1em"><strong>Instructions:</strong> Answer the following questions and click the "Check answers" button.</p>`,
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
        title: 'Evaluation: The Invisible Girls',
        content: `<p>This chapter will contain the evaluation for this story.</p>`,
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
    id: 30,
    title: 'Climate Action',
    description: 'This is a story about climate action.',
    url: 'https://www.un.org/sustainabledevelopment/climate-change/',
    author: 'CIELL Team',
    preview: 'climate-change/cover.png',
    color: 'rgb(113, 104, 123)',
    tasks: null,
    chapters: [
      {
        id: 0,
        title: 'Climate Action',
        examQuestion: '<p>Greta Thunberg is a schoolgirl turned activist who has encouraged millions of young people to join in her school strike for climate change every Friday.</p><p class="last">Do you believe school pupils are right to skip school in order to protest for climate change?</p>',
        content: `
          <div class="comic-grid">
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
          <div class="comic-grid">
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
            <div class="half">
              [image|climate-change/climate 11.png|Climate Change 11]
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
          <div class="comic-grid">
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
          <div class="comic-grid">
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
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 13: Take urgent action to combat climate change and its impacts</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/climate-change/" target="_blank">https://www.un.org/sustainabledevelopment/climate-change/</a></p>
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
    id: 20,
    title: 'Nuclear Power',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/energy/',
    description: 'This is another empty story.',
    preview: 'nuclear-power/cover.png',
    color: 'rgb(240, 78, 79)',
    chapters: [
      {
        id: 0,
        title: 'Nuclear Power',
        examQuestion: '<p>The threat of nuclear weapons keeps world peace. Nuclear power supplies cheap and clean energy. The benefits of nuclear technology far outweigh the disadvantages.</p><p>To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your knowledge or experience.</p><p class="last"><strong>Write at least 250 words.</strong></p>',
        content: `
          <div class="comic-grid">
            <div class="half text info info--introduction">
              <h2>Introduction</h2><p>The <strong>introduction</strong> is the roadmap for the entire piece. It is an initial paragraph that sets the tone and path for your writing. A good introduction catches attention and engages your readers right from the very start.</p>
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
            'chapterId': 10
          }
        ]
      },
      {
        id: 10,
        title: '',
        content: `
          <div class="comic-grid">
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
          <div class="comic-grid">
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
          <div class="comic-grid">
            <div class="half">
              [image|nuclear-power/nuclear 23.png|Nuclear Power 23]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 24.png|Nuclear Power 24]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 25.png|Nuclear Power 25]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 7: Ensure access to affordable, reliable, sustainable and modern energy</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/energy/" target="_blank">https://www.un.org/sustainabledevelopment/energy/</a></p>
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
    title: 'End Poverty',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/poverty/',
    description: 'This is an essay on poverty and disability.',
    preview: 'poverty/cover.png',
    color: 'rgb(166, 53, 52)',
    chapters: [
      {
        id: 0,
        title: 'End Poverty',
        examQuestion: '<p>Investing in equal access to education, jobs and public services for young people with disabilities or learning difficulties will help to reduce world poverty.</p><p class="last">Do you agree or disagree with this statement? Explain the reasons for your opinion.</p>',
        content: `
          <div class="comic-grid">
            <div class="half text info info--introduction">
            <h2>Introduction</h2><p>Essay <strong>introduction</strong> is your roadmap for the entire essay. It is a beginning paragraph that sets tone and path for the entire paper you are going to present to your reader. A good introduction to essay catches attention and makes your reader engaged right from the very start.</p>
            </div>
            <div class="half">
              [image|poverty/poverty 01.png|Poverty 1]
            </div>
            <div class="half">
              [image|poverty/poverty 02.png|Poverty 2]
            </div>
            <div class="half">
              [image|poverty/poverty 03.png|Poverty 3]
            </div>
            <div class="half">
              [image|poverty/poverty 04.png|Poverty 4]
            </div>
            <div class="half">
              [image|poverty/poverty 05.png|Poverty 5]
            </div>
            <div class="half">
              [image|poverty/poverty 06.png|Poverty 6]
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
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 07.png|Poverty 7]
            </div>
            <div class="half">
            [image|poverty/poverty 08.png|Poverty 8]
            </div>
            <div class="half">
              [image|poverty/poverty 09.png|Poverty 9]
            </div>
            <div class="half">
              [image|poverty/poverty 10.png|Poverty 10]
            </div>
            <div class="half">
              [image|poverty/poverty 11.png|Poverty 11]
            </div>
            <div class="half">
              [image|poverty/poverty 12.png|Poverty 12]
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
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 13.png|Poverty 13]
            </div>
            <div class="half">
              [image|poverty/poverty 14.png|Poverty 14]
            </div>
            <div class="half">
              [image|poverty/poverty 15.png|Poverty 15]
            </div>
            <div class="half">
              [image|poverty/poverty 16.png|Poverty 16]
            </div>
            <div class="half">
              [image|poverty/poverty 17.png|Poverty 17]
            </div>
            <div class="half">
              [image|poverty/poverty 18.png|Poverty 18]
            </div>
            <div class="half">
              [image|poverty/poverty 19.png|Poverty 19]
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
          <div class="comic-grid">
            <div class="half">
              [image|poverty/poverty 20.png|Poverty 20]
            </div>
            <div class="half">
              [image|poverty/poverty 21.png|Poverty 21]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 1: End poverty in all its forms everywhere</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/poverty/" target="_blank">https://www.un.org/sustainabledevelopment/poverty/</a></p>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 15
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
    title: 'Transport',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/cities/',
    description: 'This is an essay on transport.',
    preview: 'transport/cover.png',
    color: 'rgb(62, 57, 63)',
    chapters: [
      {
        id: 0,
        title: 'Transport',
        audio: [
          {
            filename: 'transportation-intro.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Local government should invest money in public transport to make it free and accessible to everyone, no matter their physical ability, age or wealth, and to contribute to more sustainable cities and communities for the future.</p><p class="last">Do you agree or disagree?</p>',
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|transport/transport 01.png|Transport 1]
            </div>
            <div class="half">
              [image|transport/transport 02.png|Transport 2]
            </div>
            <div class="half">
              [image|transport/transport 03.png|Transport 3]
            </div>
            <div class="half">
              [image|transport/transport 04.png|Transport 4]
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
            filename: 'transportation-part-1.mp3',
            label: 'Play'
          }
        ],
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|transport/transport 05.png|Transport 5]
            </div>
            <div class="half">
              [image|transport/transport 06.png|Transport 6]
            </div>
            <div class="half">
              [image|transport/transport 07.png|Transport 7]
            </div>
            <div class="half">
              [image|transport/transport 08.png|Transport 8]
            </div>
            <div class="half">
              [image|transport/transport 09.png|Transport 9]
            </div>
            <div class="half">
              [image|transport/transport 10.png|Transport 10]
            </div>
            <div class="half">
              [image|transport/transport 11.png|Transport 11]
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
            filename: 'transportation-part-2.mp3',
            label: 'Play'
          }
        ],
        content: `
        <div class="comic-grid">
          <div class="half">
            [image|transport/transport 12.png|Transport 12]
          </div>
          <div class="half">
            [image|transport/transport 13.png|Transport 13]
          </div>
          <div class="half">
            [image|transport/transport 14.png|Transport 14]
          </div>
          <div class="half">
            [image|transport/transport 15.png|Transport 15]
          </div>
          <div class="half">
            [image|transport/transport 16.png|Transport 16]
          </div>
          <div class="half">
            [image|transport/transport 17.png|Transport 17]
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
            filename: 'transportation-conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|transport/transport 18.png|Transport 18]
            </div>
            <div class="half">
              [image|transport/transport 19.png|Transport 19]
            </div>
            <div class="half">
              [image|transport/transport 20.png|Transport 20]
            </div>
            <div class="half">
              [image|transport/transport 21.png|Transport 21]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 11: Make cities inclusive, safe, resilient and sustainable</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/cities/" target="_blank">https://www.un.org/sustainabledevelopment/cities/</a></p>
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
    url: 'https://www.un.org/sustainabledevelopment/education/',
    description: 'A story on the issue of gender equality.',
    preview: 'agatha-christie/cover.png',
    color: 'rgb(142, 1, 49)',
    tasks: [
      {
        id: 20,
        type: 'puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order then press "Check order".</p>',
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
        examQuestion: '<p>A magazine has asked readers to send in articles on their favourite authors. You decide to write an article in which you describe your favourite author.</p><p class="last">Explain the reason for your choice, and assess the author\'s significance for the wider community.</p>',
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 01.png|Agatha 1]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 02.png|Agatha 2]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 03.png|Agatha 3]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 04.png|Agatha 4]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 05.png|Agatha 5]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 06.png|Agatha 6]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 07.png|Agatha 7]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 08.png|Agatha 8]
            </div>
          </div>`,
        choices: [
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
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 09.png|Agatha 9]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 10.png|Agatha 10]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 11.png|Agatha 11]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 12.png|Agatha 12]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 13.png|Agatha 13]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 14.png|Agatha 14]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 15.png|Agatha 15]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 16.png|Agatha 16]
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
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 17.png|Agatha 17]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 18.png|Agatha 18]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 19.png|Agatha 19]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 20.png|Agatha 20]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 21.png|Agatha 15]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 22.png|Agatha 16]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 23.png|Agatha 17]
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
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 24.png|Agatha 18]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 25.png|Agatha 19]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 26.png|Agatha 20]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 11: Education</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/education/" target="_blank">https://www.un.org/sustainabledevelopment/education/</a></p>
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
  },
  {
    id: 70,
    title: 'Homeless',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/poverty/',
    description: 'A story on the issue of homelessness.',
    preview: 'homeless/cover.jpg',
    color: 'rgb(36, 78, 84)',
    chapters: [
      {
        id: 0,
        title: 'Homelessness',
        content: `
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
            <div class="half">
              [image|homeless/homeless 05.jpg|Homeless 5]
            </div>
            <div class="half">
              [image|homeless/homeless 06.jpg|Homeless 6]
            </div>
            <div class="half">
              [image|homeless/homeless 07.jpg|Homeless 7]
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
          <div class="comic-grid">
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
        content: `
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
          <div class="comic-grid">
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
        titlt: '',
        content: `<div class="comic-grid">
            <div class="half">
              [image|homeless/homeless 17.jpg|Homeless 17]
            </div>
            <div class="half">
              [image|homeless/homeless 18.jpg|Homeless 18]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 1: End poverty in all its forms everywhere</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/poverty/" target="_blank">https://www.un.org/sustainabledevelopment/poverty/</a></p>
          </div>`,
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
  },
  {
    id: 80,
    title: 'Zen Gardens',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/health/',
    description: 'A story on the Zen gardens.',
    preview: 'zen-gardens/cover.jpg',
    color: 'rgb(187, 4, 93)',
    chapters: [
      {
        id: 0,
        title: 'Zen Gardens',
        examQuestion: '<p>A travel magazine has asked readers to send in articles on their favourite travel destination. You decide to write an article in which you describe your favourite place, explain why it is your favourite and assess its significance for the wider community.</p><p class="last"><strong>Write your article.</strong></p>',
        content: `
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
        content: `
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
        content: `
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
        content: `
          <div class="comic-grid">
            <div class="half">
              [image|zen-gardens/zen gardens 19.jpg|HomeZen Gardens 19]
            </div>
            <div class="half">
              [image|zen-gardens/zen gardens 20.jpg|HomeZen Gardens 20]
            </div>
          </div>
          <div class="further-reading">
            <h2>Further reading</h2>
            <p>UN Sustainable Development Goal 3: Ensure healthy lives and promote well-being for all at all ages</p><p class="last"><a href="https://www.un.org/sustainabledevelopment/health/" target="_blank">https://www.un.org/sustainabledevelopment/health/</a></p>
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
  }
]

export default Story
