let infographic = `<h2 class="separator dotted-border">1. Introduction</h2>
<div class="comic-grid narrow">
  <div class="half">
    [image|info-graphics/basic-essay-structure-1.jpg|Rephrase Topic]
  </div>
  <div class="half">
    [image|info-graphics/basic-essay-structure-2.jpg|Answer the Question]
  </div>
</div>
<h2 class="separator dotted-border">2. Body</h2>
<h3 class="separator">Paragraph 1</h3>
<div class="comic-grid narrow">
  <div class="half arrow">
    [image|info-graphics/basic-essay-structure-3.jpg|Topic Sentence]
  </div>
  <div class="half last arrow">
    [image|info-graphics/basic-essay-structure-4.jpg|Explanations]
  </div>
  <div class="half arrow">
    [image|info-graphics/basic-essay-structure-5.jpg|Examples]
  </div>
  <div class="half">
    [image|info-graphics/basic-essay-structure-6.jpg|Concluding Sentence (optional)]
  </div>
</div>
<h3 class="separator">Paragraph 2</h3>
<div class="comic-grid narrow">
  <div class="half arrow">
    [image|info-graphics/basic-essay-structure-7.jpg|Topic Sentence]
  </div>
  <div class="half arrow">
    [image|info-graphics/basic-essay-structure-8.jpg|Explanations]
  </div>
  <div class="half arrow">
    [image|info-graphics/basic-essay-structure-9.jpg|Examples]
  </div>
  <div class="half">
    [image|info-graphics/basic-essay-structure-10.jpg|Concluding Sentence (optional)]
  </div>
</div>
<h3 class="separator">Paragraph 3, 4, 5&hellip;</h3>
<p style="text-align:center">Feel free to add more paragraphs!</p>
<h2 class="separator dotted-border">3. Conclusion</h2>
<div class="comic-grid narrow">
  <div class="half">
    [image|info-graphics/basic-essay-structure-conclusion-1.jpg|Conclusion]
  </div>
  <div class="half">
    [image|info-graphics/basic-essay-structure-conclusion-2.jpg|Summary]
  </div>
</div>`

let Story = [
  {
    id: 10,
    title: 'Homelessness',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/poverty/',
    UNGoalImage: 'un-goals/E-WEB-Goal-01.png',
    description: 'A story on the issue of homelessness.',
    preview: 'homeless/cover.jpg',
    color: 'rgb(0, 98, 103)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-01.png',
    level: 1,
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
              [image|homeless/homeless 01.jpg|The number of people living without homes is increasing not only in developing regions but also in the richest countries.]
            </div>
            <div class="half">
              [image|homeless/homeless 02.jpg|Governments, NGOs, and international organizations, such as UNICEF and the UN, trys to raise awareness about homelessness.]
            </div>
            <div class="half">
              [image|homeless/homeless 03.jpg|Everyone has the right to housing; therefore, we should work towards ending homelessness.]
            </div>
            <div class="half">
              [image|homeless/homeless 04.jpg|Scotland and Finland have made great progress to resovle this issue.]
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
              [image|homeless/homeless 05.jpg|Housing is a human right.]
            </div>
            <div class="half">
              [image|homeless/homeless 06.jpg|Society must take care of those who cannot take care of themselves.]
            </div>
            <div class="half">
              [image|homeless/homeless 07.jpg|Night shelters and short-term hostels are not effective methods; it is better to build permanent shelters to accomodate homeless people.]
            </div>
            <div class="half">
              [image|homeless/homeless 08.jpg|The 'housing principle' model in Finland is a great example. A homeless person in Helsinki can stay in temporary accommodation for free.]
            </div>
            <div class="half">
              [image|homeless/homeless 09.jpg|Once a homeless person gets their life back on track, a flat is given to them as a reward.]
            </div>
            <div class="half">
              [image|homeless/homeless 10.jpg|Consequently, this intervention has ended the problem in the region.]
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
              [image|homeless/homeless 11.jpg|A key to a flat is not the only solution needed; services and social connectedness play a crucial role as well.]
            </div>
            <div class="half">
              [image|homeless/homeless 12.jpg|A person needs health and social services as well as a supportive community to tackle the reasons for homelessness.]
            </div>
            <div class="half">
              [image|homeless/homeless 13.jpg|For example, in Scotland, the Social Bite café provides jobs and training for homeless people]
            </div>
            <div class="half">
              [image|homeless/homeless 14.jpg|and the Social Bite Village offers accomodation and encouragement.]
            </div>
            <div class="half">
              [image|homeless/homeless 15.jpg|While different approaches are needed for different people around the world,]
            </div>
            <div class="half">
              [image|homeless/homeless 16.jpg|This is a promising model that could be used elsewhere.]
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
              [image|homeless/homeless 17.jpg|In conclusion, homelessness is a serious urban social problem.]
            </div>
            <div class="half">
              [image|homeless/homeless 18.jpg|Governments, NGOs, international organisations and private actors can offer housing, services and social connections so every human being has a home.]
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
        content: infographic,
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
            'text': 'Next',
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
    id: 20,
    title: 'Reduce Inequality',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/inequality/',
    UNGoalImage: 'un-goals/E-WEB-Goal-10.png',
    description: 'This is an essay on inequality.',
    preview: 'poverty/cover.jpg',
    color: 'rgb(175, 31, 35)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-10.png',
    level: 2,
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
              [image|poverty/poverty 01.jpg|In some societies, young people with disabilities and learning difficulties]
            </div>
            <div class="half">
              [image|poverty/poverty 02.jpg|have little or no access to education,]
            </div>
            <div class="half">
              [image|poverty/poverty 03.jpg|jobs or public services.]
            </div>
            <div class="half">
              [image|poverty/poverty 04.jpg|The lack of access contributes to world poverty, however,]
            </div>
            <div class="half">
              [image|poverty/poverty 05.jpg|the situation could be reversed if equal opportunities were provided.]
            </div>
            <div class="half">
              [image|poverty/poverty 06.jpg|This essay presents the arguments to support this opinion.]
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
              [image|poverty/poverty 07.jpg|In the first instance, it should be noted that, there are many millions of people around the world who have a disability or learning difficulty.]
            </div>
            <div class="half">
            [image|poverty/poverty 08.jpg|If all of these individuals are denied equal opportunities in the form of access to schools,]
            </div>
            <div class="half">
              [image|poverty/poverty 09.jpg|local services and consequently, work,]
            </div>
            <div class="half">
              [image|poverty/poverty 10.jpg|this creates unnecessary dependence on the government and their families.]
            </div>
            <div class="half">
              [image|poverty/poverty 11.jpg|Then, it is the government and family members who need to support them financially, socially and emotionally.]
            </div>
            <div class="half">
              [image|poverty/poverty 12.jpg|This can be extremely frustrating for the individuals involved who are able and want to be independent but are denied this chance because the services are not made available to them.]
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
              [image|poverty/poverty 13.jpg|On the other hand, if public services, education and work were available to all,]
            </div>
            <div class="half">
              [image|poverty/poverty 14.jpg|whatever a person's ability,]
            </div>
            <div class="half">
              [image|poverty/poverty 15.jpg|then many more people would have the opportunity to realise their potential.]
            </div>
            <div class="half">
              [image|poverty/poverty 16.jpg|This could mean that a great deal more people would have the education they need to get them into a job, earn money and live independently.]
            </div>
            <div class="half">
              [image|poverty/poverty 17.jpg|As a result, this could lead to less reliance on government and state funds]
            </div>
            <div class="half">
              [image|poverty/poverty 18.jpg|while at the same time they would be making greater financial contribution to the economy.]
            </div>
            <div class="half">
              [image|poverty/poverty 19.jpg|In addition, it would mean there would be more money available to dedicate to people experiencing poverty.]
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
              [image|poverty/poverty 20.jpg|In summary, whilst poverty is a huge challenge to take on,]
            </div>
            <div class="half">
              [image|poverty/poverty 21.jpg|ensuring equal access for those with disabilities could be one small way to help reduce poverty.]
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
    UNGoalImage: 'un-goals/E-WEB-Goal-03.png',
    description: 'A story on the Zen gardens.',
    preview: 'zen-gardens/cover.jpg',
    color: 'rgb(234, 149, 34)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-03.png',
    level: 1,
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
              [image|zen-gardens/zen gardens 01.jpg|My favourite travel destination is Ryōan-ji Zen gardens found in northwest Kyoto, Japan.]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 02.jpg|The Zen temple and Japanese rock garden were created by Buddhist monks in the fifteenth century]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 03.jpg|to help them meditate and find peace.]
            </div>            
            <div class="half">
              [image|zen-gardens/zen gardens 04.jpg|As a UNESCO World Heritage Site, it has special significance for humanity.]
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
              [image|zen-gardens/zen gardens 05.jpg|The Zen gardens are designed to be a place of natural beauty.]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 06.jpg|Located within a Buddhist temple, they represent Japanese culture and aesthetics.]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 07.jpg|For example, sand and gravel]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 08.jpg|is raked to symbolise ripples in water.]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 09.jpg|Rocks are placed on top of the sand to make a soothing image.]
            </div> 
            <div class="half">
              [image|zen-gardens/zen gardens 10.jpg|Upright or vertical stones can be used to represent trees,]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 11.jpg|while flat, horizontal stones denote water and arching stones embody fire.]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 12.jpg|Walking in Kyoto gardens, visitors can gain a better understanding of the Japanese concept of harmony.]
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
              [image|zen-gardens/zen gardens 13.jpg|The gardens have a worldwide significance, promoting inner peace and contact with nature.]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 14.jpg|They help people of all ages to enjoy the tranquility and beauty of these Japanese gardens.]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 15.jpg|For example, the famous Harvard professor and Zen Buddhist monk Shunmyo Masuno]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 16.jpg|describes Zen gardens as a 'dialog with the space'.]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 17.jpg|The gardens assist in the development of a sense of respect for all things and connectedness with nature.]
            </div>  
            <div class="half">
              [image|zen-gardens/zen gardens 18.jpg|They can help people realise the importance of respect for other humans and the environment at large.]
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
              [image|zen-gardens/zen gardens 19.jpg|In conclusion, the Kyoto Zen gardens are pleasing to the eye due to the natural patterns, sophisticated design, and symbolism.]
            </div>
            <div class="half">
              [image|zen-gardens/zen gardens 20.jpg|They are important to the wider community as they help to promote peace and connectedness with all living beings on earth.]
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
        content: infographic,
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
    UNGoalImage: 'un-goals/E-WEB-Goal-04.png',
    description: 'A story on the issue of quality education.',
    preview: 'agatha-christie/cover.jpg',
    color: 'rgb(235, 0, 135)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-04.png',
    level: 1,
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
        audio: [
          {
            filename: 'agatha-christie/introduction.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 01.jpg|My favourite author is Agatha Christie who created the genius and eccentric detective, Hercule Poirot, 100 years ago.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 02.jpg|UNESCO acknowledges that she is the most translated author in the world to date.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 03.jpg|Despite her learning difficulties (dysgraphia)]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 04.jpg|she was a prolific writer and is known for her: 66 detective novels;]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 05.jpg|14 short stories]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 06.jpg|the world's longest-running murder mystery play called 'The Mousetrap';]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 07.jpg|and six romance novels.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 08.jpg|The Queen awarded her the title: Dame Commander of the Order of the British Empire for her contribution to literature.]
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
            filename: 'agatha-christie/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 09.jpg|Her talent, persistence and hard work, despite her learning difficulties, make her exceptional.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 10.jpg|The learning challenges that Agatha Christie experienced could not be diagnosed in the 1900s.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 11.jpg|Agatha often described herself as the 'slow one in the family' and always found writing and spelling very tiring.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 12.jpg|She learned to read in English and French, although her hand writing and spelling errors were numerous.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 13.jpg|Her first book 'The Mysterious Affair at Styles' was rejected by six publishers,]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 14.jpg|but she kept trying.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 15.jpg|Finally, when her books were published, readers adored her creative imagination,]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 16.jpg|mysterious narrations and amazing characters.]
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
            filename: 'agatha-christie/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 17.jpg|As a famous novelist, playwright, and short story writer Agatha Christie is called the queen of crime mysteries.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 18.jpg|As a matter of fact, she continued to write, experiment with different types of thriller and murder mysterie stories for all her life.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 19.jpg|Her crime novels have produced some of the most recognizable characters in British literature such as Miss Marple and Hercule Poirot.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 20.jpg|The New Yorker Journal states that detective stories]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 21.jpg|were invented by Edgar Allan Poe,]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 22.jpg|but Agatha Christie revolutionised murder mysteries]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 23.jpg|and they have become firmly rooted in British culture.]
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
            filename: 'agatha-christie/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|agatha-christie/agatha 24.jpg|Agatha Christie could be a role model for all those who struggle with writing.]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 25.jpg|Miss Marple and Hercule Poirot are widely recognized characters]
            </div>
            <div class="half">
              [image|agatha-christie/agatha 26.jpg|and their stories are read in many languages across the world.]
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
        content: infographic,
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
    UNGoalImage: 'un-goals/E-WEB-Goal-05.png',
    preview: 'gender-equality/cover.jpg',
    color: 'rgb(72, 119, 82)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-05.png',
    level: 1,
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
              [image|gender-equality/invisible 00.jpg|IN 2016, the UN conducted research]
            </div>
            <div class="half">
              [image|gender-equality/invisible 02.jpg|in Zimbabwe,]
            </div>
            <div class="half">
              [image|gender-equality/invisible 03.jpg|Pakistan]
            </div>
            <div class="half">
              [image|gender-equality/invisible 04.jpg|and Nicaragua,]
            </div>
            <div class="half">
              [image|gender-equality/invisible 05.jpg|to investigate the perceptions and experiences of adolescents]
            </div>
            <div class="half">
              [image|gender-equality/invisible 06 b.jpg|on issues such as gender equality.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 07.jpg|Teenagers face challenges]
            </div>
            <div class="half">
              [image|gender-equality/invisible 08.jpg|That make girls' rights and dreams invisible.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 09.jpg|Researchers found that girls drop our of school and vanish from public records because of reasons such as poverty and gender expectations.]
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
              [image|gender-equality/invisible 10.jpg|Girls claimed that it was a challenge to stay in school.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 11.jpg|Girls linked education to increasing life opporunities]
            </div>
            <div class="half">
              [image|gender-equality/invisible 12.jpg|and improving their ability  to obtain employment and earn money to survive.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 13.jpg|Due to poverty]
            </div>
            <div class="half">
              [image|gender-equality/invisible 14.jpg|and societal factors, they often focus on household chores, have limited time to study, and marry young.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 15.jpg|For example, where finances are limited]
            </div>
            <div class="half">
              [image|gender-equality/invisible 16.jpg|parents may choose to educate their son rather than their daughter.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 17.jpg|As a result, girls have difficulty in realising their dreams of a better life through education.]
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
              [image|gender-equality/invisible 18.jpg|Often, boys face a different set of expectations.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 19.jpg|Boys are expected to be the 'breadwinners' and are sent to school so they can get a better job.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 20.jpg|Due to different gender norms, boys matty at an older age and stay in education longer than girls.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 21.jpg|For example, parents of girls expect a man to pay a good 'bride price' before he can marry their daughter.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 22.jpg|Consequently, boys have more support to stay in school and make their dreams come true.]
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
              [image|gender-equality/invisible 23.jpg|To sum up, both boys and girls perceive education as a potentially life-changing process.]
            </div>
            <div class="half">
              [image|gender-equality/invisible 24.jpg|As a result of hardship and different gender roles, many girls stop attending school]
            </div>
            <div class="half">
              [image|gender-equality/invisible 25.jpg|and become invisible.]
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
        content: infographic,
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
    id: 60,
    title: 'Clean Water',
    author: 'CIELL Team',
    url: 'https://www.un.org/sustainabledevelopment/water-and-sanitation/',
    UNGoalImage: 'un-goals/E-WEB-Goal-07.png',
    description: 'This is a story about clean water and sanitation.',
    preview: 'clean-water/cover.jpg',
    color: 'rgb(39, 189, 226)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-07.png',
    level: 2,
    tasks: [
      {
        id: 6000,
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
                image: 'clean-water/clean-water-02.jpg'
              },
              {
                text: '',
                image: 'clean-water/clean-water-03.jpg',
                correct: true
              },
              {
                text: '',
                image: 'clean-water/clean-water-08.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 6010,
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
                image: 'clean-water/clean-water-07.jpg',
                correct: true
              },
              {
                text: '',
                image: 'clean-water/clean-water-08.jpg'
              },
              {
                text: '',
                image: 'clean-water/clean-water-11.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 6020,
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
                image: 'clean-water/clean-water-01.jpg',
                correct: true
              },
              {
                text: '',
                image: 'clean-water/clean-water-11.jpg'
              },
              {
                text: '',
                image: 'clean-water/clean-water-09.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 6030,
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
                image: 'clean-water/clean-water-10.jpg'
              },
              {
                text: '',
                image: 'clean-water/clean-water-11.jpg'
              },
              {
                text: '',
                image: 'clean-water/clean-water-09.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 6040,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels of the introduction of this essay into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'clean-water/clean-water-07.jpg'
          },
          {
            order: 1,
            image: 'clean-water/clean-water-08.jpg'
          },
          {
            order: 2,
            image: 'clean-water/clean-water-09.jpg'
          },
          {
            order: 3,
            image: 'clean-water/clean-water-10.jpg'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Clean Water',
        audio: [
          {
            filename: 'clean-water/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p class="last">Clean water and sanitation are basic human rights.  However, there is more and more discussion on how these rights are being ignored or even sabotaged thus preventing government spending to improve civil society.  Discuss the main points that support this statement and express your own opinion.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|clean-water/clean-water-01.jpg|Clean water and sanitation are basic human rights and necessities.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-02.jpg|However, billions of people, mostly in developing countries, do not have access to these services making it impossible to live in a healthy environment.]
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
            filename: 'clean-water/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|clean-water/clean-water-03.jpg|One of the main issues is contamination of the Earth's water.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-04.jpg|It is known that industries often release toxic waste in water, making it not only unsuitable for household use but also causing detrimental impact on the environment.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-05.jpg|This problem could be addressed by raising environmental awareness in individuals and industry, by introducing policies that control waste disposal,]
            </div>
            <div class="half">
              [image|clean-water/clean-water-06.jpg|and by imposing fines on those who ignore them.]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconAfter': 'arrow-left',
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
            filename: 'clean-water/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|clean-water/clean-water-07.jpg|Another issue that people are facing is lack of facilities.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-08.jpg|Especially in rural areas in developing countries, and mainly because of economic problems, there is no infrastructure to obtain water and channel it.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-09.jpg|Women and children have to travel long distances in order to find water, often from rather unsafe sources, and carry it back home.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-10.jpg|To solve this problem, governments should invest in water desalination and supply households with water that is clean and safe to drink.]
            </div>
          </div>`,
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconAfter': 'arrow-left',
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
            filename: 'clean-water/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|clean-water/clean-water-11.jpg|To sum up, undoubtedly toxic waste and poor infrastructure affect access to water and sanitation.]
            </div>
            <div class="half">
              [image|clean-water/clean-water-12.jpg|However, this issue is important to tackle as more than 800 children die every day from diseases linked to dirty water and poor hygiene. Unless governments protect water supplies and provide hygiene education, millions of people will continue to die every year.]
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
            'text': 'Next',
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
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=FAuoxTHq_zw" target="_blank">UN Sustainable Development Goal&nbsp;6</a>.</p>
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
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 6000,
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
        taskId: 6010,
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
        taskId: 6020,
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
        taskId: 6030,
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
        taskId: 6040,
        title: 'Task: Puzzle',
        content: '',
        choices: [
          {
            'text': 'Previous',
            'class': 'previous',
            'iconBefore': 'arrow-left',
            'chapterId': 90
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
    UNGoalImage: 'un-goals/E-WEB-Goal-07.png',
    description: 'This is a story about nuclear power.',
    preview: 'nuclear-power/cover.jpg',
    color: 'rgb(255, 209, 0)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-07.png',
    level: 1,
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
              [image|nuclear-power/nuclear 01.jpg|Nuclear power]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 02.jpg|is one of the most important scientific discoveries that could alleviate the energy crisis.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 03.jpg|However, if it is not used carefully,]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 04.jpg|it may be disastrous for all forms of life on Earth.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 05.jpg|Nuclear power has the potential to supply clean and cheap energy for the global community, despite challenges.]
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
              [image|nuclear-power/nuclear 06.jpg|Nuclear technology still has challenges related to safety.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 07.jpg|Unfortunately, radioactive materials have been released into the atmosphere as a result of human error and natural disaster.]
            </div>
            <div class="half">
            [image|nuclear-power/nuclear 08.jpg|For example: the major nuclear incident at Chernobyl in Ukraine,]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 09.jpg|in 1986, which was partially due to human error;]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 10.jpg|and the nuclear disaster at Fukushima, in Japan, in 2011,]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 11.jpg|which started with an earthquake and tsunami.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 12.jpg|These examples show that if it is not handled carefully, there can be serious health risks]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 13.jpg|and detrimental effects to the environment.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 14.jpg|As a result, nuclear power needs to be safer to reassure the international community]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 15.jpg|and protect the environment.]
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
              [image|nuclear-power/nuclear 16.jpg|The generation of nuclear energy is environmentally friendly, reliable and cost-effective.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 17.jpg|It is a zero-emission, clean energy,]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 18.jpg|that produces mimnimal waste and maximum electricity on less land than any outher clean-air source.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 19.jpg|In comparison to solar, wind and water generated energy, nuclear power would be cheaper, more reliable and more productive.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 20.jpg|For example, generating electricity from wind would require many wind turbines over a large area of land]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 21.jpg|and is dependent on the weather conditions.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 22.jpg|Consequently, nuclear power is a valuable contributor to the production of energy.]
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
              [image|nuclear-power/nuclear 23.jpg|In conclusion, the advantages outweigh the obstacles]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 24.jpg|as nuclear power can provide clean, cost-effective energy.]
            </div>
            <div class="half">
              [image|nuclear-power/nuclear 25.jpg|It can provide a reliable source of energy alongside power generation from water, wind and sun.]
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
        content: infographic,
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
    UNGoalImage: 'un-goals/E-WEB-Goal-08.png',
    description: 'Sustained and inclusive economic growth can drive progress, create decent jobs for all and improve living standards.',
    preview: 'decent-work/cover.jpg',
    color: 'rgb(226, 10, 127)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-08.png',
    level: 2,
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
        audio: [
          {
            filename: 'decent-work/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>"People should realise that decent work and economic growth are closely linked."</p><p class="last">Please discuss this statement.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-01.jpg|These days, experts argue that labour productivity has started to increase while unemployment is decreasing.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-02.jpg|However, the growth in global economy is much slower than in the past and more progress is needed in order to create decent, fair and safe employment opportunities for all.]
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
            filename: 'decent-work/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-03.jpg|Firstly, it is important to encourage entrepreneurship.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-04.jpg|The launch of new businesses, especially ones that combine creativity and innovation, can be very successful.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-05.jpg|These new enterprises can generate income and benefit not only the entrepreneur]
            </div>
            <div class="half">
              [image|decent-work/decent-work-06.jpg|but also the people who work for such businesses.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-07.jpg|Tourism, for example, can be an area to invest in as apart from generating jobs,]
            </div>
            <div class="half">
              [image|decent-work/decent-work-08.jpg|it also promotes local culture and products.]
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
            filename: 'decent-work/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-09.jpg|Job opportunities, though, should be available for men,]
            </div>
            <div class="half">
              [image|decent-work/decent-work-10.jpg|women, young people, migrants and also for persons with disabilities.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-11.jpg|Inequalities in opportunities and earnings are very often observed in our society and this is something that should be eradicated.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-12.jpg|According to research, young women are twice as likely as young men not to be in employment, education or training.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-13.jpg|It is also important that labour rights and work in secure environments are taken into consideration.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-14.jpg|For example, forced labour, child labour and modern slavery should be stopped.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-15.jpg|Employers are interested in quick mass production that brings earnings and will lead, according to them, to economic growth.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-16.jpg|They forget, though, that only educated and trained individuals can lead a country and its people to success.]
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
            filename: 'decent-work/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|decent-work/decent-work-17.jpg|In conclusion, I believe that by strengthening full and productive employment and income generation, the overall standard of living will be improved.]
            </div>
            <div class="half">
              [image|decent-work/decent-work-18.jpg|Governments and individuals should also realise that prosperity will come only if the proportion of people in employment, education and training increases.]
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
            'chapterId': 30
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
    UNGoalImage: 'un-goals/E-WEB-Goal-11.png',
    description: 'This is an essay on transport.',
    preview: 'transports/cover.jpg',
    color: 'rgb(198, 32, 39)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-11.png',
    level: 2,
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
              [image|transports/transports 01.jpg|In some countries public transportation such as trains, buses, metro and the underground]
            </div>
            <div class="half">
              [image|transports/transports 02.jpg|can be very costly,]
            </div>
            <div class="half">
              [image|transports/transports 03.jpg|and often more so than travelling by car.]
            </div>
            <div class="half">
              [image|transports/transports 04.jpg|Making public transport free for all could help to make cities and communities more sustainable in a number of ways and some of these will be covered in this essay.]
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
              [image|transports/transports 05.jpg|Most importantly, providing free public transport for all]
            </div>
            <div class="half">
              [image|transports/transports 06.jpg|could discourage the use of cars and therefore help to reduce the amount of carbon dioxide emissions.]
            </div>
            <div class="half">
              [image|transports/transports 07.jpg|This will result in more environmentally-friendly cities and also help to reduce the levels of congestion on roads.]
            </div>
            <div class="half">
              [image|transports/transports 08.jpg|Currently, the heavy traffic sometimes leads to levels of air pollution that are toxic and unsafe for people's health.]
            </div>
            <div class="half">
              [image|transports/transports 09.jpg|In the long-term, such levels of traffic are unsustainable in terms of the damage they do to people's health]
            </div>
            <div class="half">
              [image|transports/transports 10.jpg|and many cities simply do not have the space or infrastructure to cope with the ever-increasing numbers of cars on their roads.]
            </div>
            <div class="half">
              [image|transports/transports 11.jpg|Accessible and affordable public transport would help to alleviate the burden cars place on their existing road systems.]
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
            [image|transports/transports 12.jpg|Currently, in some cities and communnities, antiquated, inaccessible and expensive public transport]
          </div>
          <div class="half">
            [image|transports/transports 13.jpg|means that some people in society can become isolated.]
          </div>
          <div class="half">
            [image|transports/transports 14.jpg|Wheelchair users, for example, may not be able to use certain transport such as the metro because lifts may not be provided.]
          </div>
          <div class="half">
            [image|transports/transports 15.jpg|Other individuals, for instance, may not be able to accept certain job offers]
          </div>
          <div class="half">
            [image|transports/transports 16.jpg|owing to the high price of travel on trains or buses.]
          </div>
          <div class="half">
            [image|transports/transports 17.jpg|This lack of accessibility and the high cost of transport can lead to reducing people's ability to move around, to socialise and even to work.]
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
              [image|transports/transports 18.jpg|To conclude, it is clear that free and accessible public transport could be very beneficial to the environment,]
            </div>
            <div class="half">
              [image|transports/transports 19.jpg|the economy and the well-being of the people inhabiting each city or community.]
            </div>
            <div class="half">
              [image|transports/transports 20.jpg|In Estonia, for instance, the people of Tallinn have already enjoyed several years of free and accessible transport and this has proven to be very successful.]
            </div>
            <div class="half">
              [image|transports/transports 21.jpg|Other communities and cities should follow their example if they wish to be sustainable in the future.]
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
    UNGoalImage: 'un-goals/E-WEB-Goal-13.png',
    author: 'CIELL Team',
    preview: 'climate-change/cover.jpg',
    color: 'rgb(213, 212, 36)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-13.png',
    level: 2,
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
              [image|climate-change/climate 01.jpg|Every Friday millions of pupils around the world fo on strike for their future,]
            </div>
            <div class="half">
              [image|climate-change/climate 02.jpg|leaving their school to protest for the action needed to reverse and tackle the effects of climate change.]
            </div>
            <div class="half">
              [image|climate-change/climate 03.jpg|Although some schools do not support this,]
            </div>
            <div class="half">
              [image|climate-change/climate 04.jpg|others have allowed their pupils to join the strike.]
            </div>
            <div class="half">
              [image|climate-change/climate 05.jpg|I believe all young people should be given the right to attend these crucial demonstrations.]
            </div>
            <div class="half">
              [image|climate-change/climate 06.jpg|This essay will explain the reasons why I agree with pupils being allowed to take part in these potentially life-saving protests.]
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
              [image|climate-change/climate 07.jpg|It cannot now be ignored that]
            </div>
            <div class="half">
              [image|climate-change/climate 08.jpg|scientists all around the world have declared a climate crisis]
            </div>
            <div class="half">
              [image|climate-change/climate 09.jpg|and state that if humans do not change their ways,]
            </div>
            <div class="half">
              [image|climate-change/climate 10.jpg|the planet could become uninhabitable in the not too distant future.]
            </div>
            <div class="half">
              [image|climate-change/climate 11.jpg|For this reason alone, young people should have the right to protest the lack of action taken by their governments to protect their future.]
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
              [image|climate-change/climate 12.jpg|Moreover, as many students argue, if the planet changes in the way scientists predict as a result of the accelerated rate of climate change,]
            </div>
            <div class="half">
              [image|climate-change/climate 13.jpg|then a traditional school education will be of little use.]
            </div>
            <div class="half">
              [image|climate-change/climate 14.jpg|It is vital that action is taken urgently]
            </div>
            <div class="half">
              [image|climate-change/climate 15.jpg|if those currently in school are to even have a future.]
            </div>
            <div class="half">
              [image|climate-change/climate 16.jpg|In light of this, recognising and acting in response to the climate crisis could be considered a great deal more important than going to school on Fridays.]
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
              [image|climate-change/climate 17.jpg|To conclude, to a certain extent, school pupils have little choice but to skip school for these protests.]
            </div>
            <div class="half">
              [image|climate-change/climate 18.jpg|If their governments refuse to take action to tacke the climate crisis]
            </div>
            <div class="half">
              [image|climate-change/climate 19.jpg|then the pupils will have to continue protesting until they do.]
            </div>
            <div class="half">
              [image|climate-change/climate 20.jpg|After all, it is essentially their lives they are fighting for.]
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
    id: 140,
    title: 'Water Pollution',
    description: 'This is a story about water pollution.',
    url: 'https://www.un.org/sustainabledevelopment/oceans/',
    UNGoalImage: 'un-goals/E-WEB-Goal-14.png',
    author: 'CIELL Team',
    preview: 'water-pollution/cover.jpg',
    color: 'rgb(2, 124, 187)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-14.png',
    level: 1,
    tasks: [
      {
        id: 14000,
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
                image: 'water-pollution/water-pollution-05.jpg'
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-06.jpg'
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-02.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 14010,
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
                image: 'water-pollution/water-pollution-03.jpg'
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-11.jpg',
                correct: true
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-04.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 14020,
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
                image: 'water-pollution/water-pollution-01.jpg'
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-09.jpg'
              },
              {
                text: '',
                image: 'water-pollution/water-pollution-06.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 14030,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'water-pollution/water-pollution-03.jpg'
          },
          {
            order: 1,
            image: 'water-pollution/water-pollution-04.jpg'
          },
          {
            order: 2,
            image: 'water-pollution/water-pollution-05.jpg'
          },
          {
            order: 3,
            image: 'water-pollution/water-pollution-06.jpg'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'Water Pollution',
        audio: [
          {
            filename: 'water-pollution/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>Water pollution has been an increasing problem in our oceans over the last few decades. What causes water pollution? How can we prevent this problem?</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|water-pollution/water-pollution-01.jpg|Water pollution is a global concern. UNESCO claims that there is a deterioration of coastal waters due to pollution that is having a negative effect on fishing which is an important food source.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-02.jpg|We need to identify the causes of water contamination and support United Nations initiatives that aim to improve the quality of water worldwide.]
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
            filename: 'water-pollution/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|water-pollution/water-pollution-03.jpg|Pollutants are materials in the water that can cause harm to people and ecosystems.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-04.jpg|The most common water pollutants are chemicals created by humans such as pesticides, medicines and personal care products.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-05.jpg|For example, UNESCO reported that pollution was worsening due to the disposal of untreated or insufficiently treated wastewaters into rivers, lakes and seas.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-06.jpg|Therefore, waste products are a common cause of poor water quality around the world.]
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
            filename: 'water-pollution/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|water-pollution/water-pollution-07.jpg|The UN recommends educational initiatives to reverse the decline in ocean health.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-08.jpg|UNESCO not only identifies areas for improvement but also offers sustainable solutions such as training in water quality.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-09.jpg|For example, UNESCO facilitates online and face-to-face training that raises awareness of the health and environmental risks posed by emerging pollutants and teaches safe reuse of wastewater.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-10.jpg|Thus, through education and skills development, marine water degradation could be reduced and aquatic life protected.]
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
            filename: 'water-pollution/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|water-pollution/water-pollution-11.jpg|To conclude, water pollution is mainly due to human mismanagement of natural resources.]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-12.jpg|Global citizens could learn about the implications of water contamination]
            </div>
            <div class="half">
              [image|water-pollution/water-pollution-13.jpg|and how to protect our oceans for future generations.]
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
        title: 'Infographic: Basic Essay Structure',
        titleClass: 'center',
        content: infographic,
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
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=pBn8ZCQvFoo" target="_blank">UN Sustainable Development Goal&nbsp;14</a>.</p>
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
            'iconAfter': 'arrow-right',
            'chapterId': 60
          }
        ]
      },
      {
        id: 60,
        taskId: 14000,
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
        taskId: 14010,
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
        taskId: 14020,
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
        taskId: 14030,
        title: 'Task: Puzzle',
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
    id: 150,
    title: 'The Great Green Wall',
    description: '',
    url: 'https://www.un.org/sustainabledevelopment/biodiversity/',
    UNGoalImage: 'un-goals/E-WEB-Goal-15.png',
    author: 'CIELL Team',
    preview: 'green-wall/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-15.png',
    level: 1,
    tasks: [
      {
        id: 15000,
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
                image: 'green-wall/green-wall-12.jpg',
                correct: true
              },
              {
                text: '',
                image: 'green-wall/green-wall-10.jpg'
              },
              {
                text: '',
                image: 'green-wall/green-wall-11.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 15010,
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
                image: 'green-wall/green-wall-12.jpg'
              },
              {
                text: '',
                image: 'green-wall/green-wall-3.jpg'
              },
              {
                text: '',
                image: 'green-wall/green-wall-11.jpg',
                correct: true
              }
            ]
          }
        ]
      },
      {
        id: 15020,
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
                image: 'green-wall/green-wall-14.jpg',
                correct: true
              },
              {
                text: '',
                image: 'green-wall/green-wall-16.jpg'
              },
              {
                text: '',
                image: 'green-wall/green-wall-3.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 15030,
        name: 'Reorder the panels',
        type: 'puzzle',
        typeName: 'Puzzle',
        title: '',
        description: '<p style="margin-bottom:1em"><strong>Drag and drop</strong> the panels into the correct order.</p>',
        items: [
          {
            order: 0,
            image: 'green-wall/green-wall-5.jpg'
          },
          {
            order: 1,
            image: 'green-wall/green-wall-6.jpg'
          },
          {
            order: 2,
            image: 'green-wall/green-wall-7.jpg'
          },
          {
            order: 3,
            image: 'green-wall/green-wall-8.jpg'
          },
          {
            order: 4,
            image: 'green-wall/green-wall-9.jpg'
          },
          {
            order: 5,
            image: 'green-wall/green-wall-10.jpg'
          },
          {
            order: 6,
            image: 'green-wall/green-wall-11.jpg'
          }
        ]
      }
    ],
    chapters: [
      {
        id: 0,
        title: 'The Great Green Wall',
        examQuestion: '<p>An environmental magazine has asked readers to contribute articles on innovative products or services that protect the planet. You decide to write an article in which you describe an environmental intervention, explain why you have chosen it and assess its significance for the wider community.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|green-wall/green-wall-1.jpg|The Sahara dester has been slowly expanding for decades and indiduals, international organisations and governments in Africa]
            </div>
            <div class="half">
              [image|green-wall/green-wall-2.jpg|are combatting lad degredation and loss of animal habitats.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-3.jpg|They are taking steps to reduce the consequences of rising temperature in the region and promote sustainable agriculture.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-4.jpg|One of the most important environmental initiatives is &raquo;The Great Green Wall&laquo; in Africa.]
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
              [image|green-wall/green-wall-5.jpg|Planting trees from east to west across Africa,]
            </div>
            <div class="half">
              [image|green-wall/green-wall-6.jpg|eleven countries are growing a world wonder]
            </div>
            <div class="half">
              [image|green-wall/green-wall-7.jpg|which saves animals, shelters the land and improves millions of lives.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-8.jpg|This African-led movement aims at creating an 8,000km living wall of vegetation to protect the landscape,]
            </div>
            <div class="half">
              [image|green-wall/green-wall-9.jpg|create jobs and fight poverty.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-10.jpg|For example, senegal has already made the biggest progress, planting 11 million acacia trees]
            </div>
            <div class="half">
              [image|green-wall/green-wall-11.jpg|that create a canopy that preserves the humidity of the soil. Thus, less water is needed for land cultivation and the erosion of the soil is reduced.]
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
              [image|green-wall/green-wall-12.jpg|The Great Green Wall is a global symbol for humanity overcoming one of its biggest threats – desertification.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-13.jpg|By establishing forests, people can increase food supplies, protect animals, and learn about sustainable forest management.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-14.jpg|Men and women in the region were taught by experts how to plant trees, protect them from drought and cultivate the land without harming the forest.]
            </div>
            <div class="half">
              [image|green-wall/green-wall-15.jpg|By improving agricultural practices,]
            </div>
            <div class="half">
              [image|green-wall/green-wall-16.jpg|Africans can reduce hunger and create more employment while respecting nature and animals.]
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
            [image|green-wall/green-wall-17.jpg|Increasing temperatures due to climate change has inspired eleven countries in Africa]
          </div>
          <div class="half">
            [image|green-wall/green-wall-18.jpg|to implement one of the biggest sustainability projects in the world – The Great Green Wall.]
          </div>
          <div class="half">
            [image|green-wall/green-wall-19.jpg|As a result, Africans can protect life and land,]
          </div>
          <div class="half">
            [image|green-wall/green-wall-20.jpg|Learn about forestry and build a better future for generations to come.]
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
        content: infographic,
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
            <p class="last">Find out more about <a href="https://www.youtube.com/watch?v=556QXoUpjUY" target="_blank">UN Sustainable Development Goal&nbsp;15</a>.</p>
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
        taskId: 15000,
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
        taskId: 15010,
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
        taskId: 15020,
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
        taskId: 15030,
        title: 'Task: Reorder the panels',
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
            'iconAfter': 'arrow-right',
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
    UNGoalImage: 'un-goals/E-WEB-Goal-16.png',
    author: 'CIELL Team',
    preview: 'cipta/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-16.png',
    level: 1,
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
                image: 'cipta/Cipta 15.jpg'
              },
              {
                text: '',
                image: 'cipta/Cipta 13.jpg',
                correct: true
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
        audio: [
          {
            filename: 'cipta/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>You belong to an English-language reading group which recently read a book in a book contest. You have agreed to write a review of the book for the group’s website. In your review you should give your opinion of the format used for the book and say whether you think a book contest could be used to enhance students&apos; interest, in general.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 01.jpg|UNICEF and the United Nations organised an international comic book contest on the theme of ending violence in and around schools.]
            </div>
            <div class="half">
              [image|cipta/Cipta 02.jpg|It was an enormous success; 3,600 superheroes were designed from 140 countries.]
            </div>
            <div class="half">
              [image|cipta/Cipta 03.jpg|The selection committee, including Gabriel Piccolo, a famous comic artist, chose 8 comic books.]
            </div>
            <div class="half">
              [image|cipta/Cipta 04.jpg|Children from around the world voted online and gave the prize to Rizka,]
            </div>
            <div class="half">
              [image|cipta/Cipta 05.jpg|an 18-year-old anti-bullying activist from Indonesia.]
            </div>
            <div class="half">
              [image|cipta/Cipta 06.jpg|The story is about Cipta, a young girl who helps students to fight against violence and face their fears.]
            </div>
            <div class="half">
              [image|cipta/Cipta 07.jpg|Her superpowers come from art and her magical notebook.]
            </div>
            <div class="half">
              [image|cipta/Cipta 08.jpg|When she draws ways to stop Bayangan, the aggressive ghost of shadows, her drawings come alive.]
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
            filename: 'cipta/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 09.jpg|The book is written in an artistic, accessible and fun comic book format.]
            </div>
            <div class="half">
              [image|cipta/Cipta 10.jpg|It is easy to read and understand the story plot through its colourful images. The comic is available and downloadable from UN websites.]
            </div>
            <div class="half">
              [image|cipta/Cipta 11.jpg|The fear of bullying is portrayed as a malevolent ghost, and the story shows how children can overcome their fears.]
            </div>
            <div class="half">
              [image|cipta/Cipta 12.jpg|As a result, the comic spreads a universal message about bullying.]
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
            filename: 'cipta/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 13.jpg|A book contest could be a major source of inspiration.]
            </div>
            <div class="half">
              [image|cipta/Cipta 14.jpg|Students usually engage more when there is a prize, or they can work in teams.]
            </div>
            <div class="half">
              [image|cipta/Cipta 15.jpg|For example, the UNICEF book contest motivates students to read comics and create new ones.]
            </div>
            <div class="half">
              [image|cipta/Cipta 16.jpg|Last year, 23,000 school children voted on the 8 short-listed comics to decide on the winner. Without doubt, the ability to inspire students to draw books is a great achievement.]
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
            filename: 'cipta/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|cipta/Cipta 17.jpg|In summary, Rizka's comic book 'Cipta' is a delightful way for students to understand their fears and build confidence at school.]
            </div>
            <div class="half">
              [image|cipta/Cipta 18.jpg|The 'End Violence' competition successfully motivated students to read and write about anti-bullying.]
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
        content: infographic,
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
    UNGoalImage: 'un-goals/E-WEB-Goal-02.png',
    author: 'CIELL Team',
    preview: 'food-poverty/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-02.png',
    level: 1,
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
        audio: [
          {
            filename: 'food-poverty/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>A film magazine is running a series on International Cinema.  It has invited readers to send in reviews of films set in their own country.  You decide to send in a review of such a film considering how effectively the film illustrates particular aspects of life and attitudes in your country.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-1.jpg|'A Place at the Table' is a film directed by Lori Silverbush and Kristi Jacobson, featuring Jeff Bridges and chef Tom Colicchio.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-2.jpg|The film is derived from a book entitled 'A Place at the Table: The Crisis of 49 Million Hungry Americans and How to Solve It', edited by Peter Pringle.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-3.jpg|True stories are used to illustrate the challenges and consequences of food poverty in the United States.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-4.jpg|The film won the Pare Lorentz Award in 2013 because it raises awareness of this important social issue.]
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
            filename: 'food-poverty/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-5.jpg|The documentary portrays the lives of those facing food insecurity.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-6.jpg|In the USA, one in four children are malnourished, and do not have a healthy diet.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-7.jpg|For example, Rosie, a young girl from Colorado,]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-8.jpg|feels hungry all day long and cannot concentrate on doing her homework.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-9.jpg|She relies on receiving food from friends and neighbours.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-10.jpg|Thus, lack of proper nutrition can affect many aspects of social life such as school performance.]
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
            filename: 'food-poverty/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-11.jpg|The film also asks why so many people do not have access to affordable, quality food in one of the richest countries in the world.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-12.jpg|For example, it shows the life of a police officer]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-13.jpg|whose monthly salary is so low that he must visit a food back to survive.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-14.jpg|This real-life example confronts viewers expectations and helps them understand that some people in employment can struggle to find reasonably proced produce.]
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
            filename: 'food-poverty/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|food-poverty/food-poverty-15.jpg|'A Place at the Table' highlights issues around food insecurity and healthy eating in the USA. It questions the values of American society where so many children go hungry and working people rely on food banks.]
            </div>
            <div class="half">
              [image|food-poverty/food-poverty-16.jpg|I would recommend this powerful documentary to anyone who wants to understand the social implications of food poverty.]
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
        content: infographic,
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
    title: 'Enable Festival',
    description: 'This is a story about a the Enable Festival.',
    url: 'https://www.un.org/sustainabledevelopment/globalpartnerships/',
    UNGoalImage: 'un-goals/E-WEB-Goal-17.png',
    author: 'CIELL Team',
    preview: 'enable-festival/cover.jpg',
    color: 'rgb(193, 116, 174)',
    numberImage: 'un-goals/SDG_Icons_Inverted_Transparent_WEB-17.png',
    level: 1,
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
        title: 'Enable Festival',
        audio: [
          {
            filename: 'enable-festival/introduction.mp3',
            label: 'Play'
          }
        ],
        examQuestion: '<p>You belong to an English-language reading group which recently attended a short-film festival. You have agreed to write a review of the festival for the group’s website. In your review you should give your opinion of the festival and say whether you think short videos are a good way of disseminating an idea, in general.</p>',
        content: `<h2>Introduction</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-1.jpg|The 3rd of December is the international day of persons with disabilities.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-2.jpg|The United Nations Department of Economic and Social Affairs collected an international set of short films that were presented at UN Headquarters.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-3.jpg|The aim of the annual festival called Enable is to promote and support a better understanding of issues surrounding disability]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-4.jpg|and the rights and well-being of persons with disabilities.]
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
            filename: 'enable-festival/paragraph-1.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 1</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-5.jpg|Films from fifteen countries and four continents formed an exciting festival, presenting videos on a range of issues.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-6.jpg|The films make people aware of the rights of people with a disability in every area of life.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-7.jpg|For example, a short film from the USA called 'Don't shoot the messenger',]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-8.jpg|explains in an amusing way, the life of a sign language interpreter]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-9.jpg|who must interpret during an argument between a deaf employee and his boss.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-10.jpg|Consequently, the Enable festival helps spectators reflect on the role of disabled people in society.]
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
            filename: 'enable-festival/paragraph-2.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Paragraph 2</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-11.jpg|Short videos are a great channel to raise awareness of social inclusion.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-12.jpg|The Enable Festival explains, through everyday experiences, the importance of inclusive education for well-being.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-13.jpg|For example, the viewer can see the challenges that children in wheelchairs experience accessing schools in the UK.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-14.jpg|Thus, the Enable festival promotes understanding of the importance of inclusion.]
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
            filename: 'enable-festival/conclusion.mp3',
            label: 'Play'
          }
        ],
        content: `<h2>Conclusion</h2>
          <div class="comic-grid">
            <div class="half">
              [image|enable-festival/enable-festival-15.jpg|In conclusion, the Enable short film festival is an amusing and educational initiative.]
            </div>
            <div class="half">
              [image|enable-festival/enable-festival-16.jpg|It enhances awareness about the rights and well-being of people with disabilities through visual art.]
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
        content: infographic,
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
