import React, {Component} from 'react'
import './Main.css'
import Block from './Block/Block'

class Main extends Component {
    state = {
        blocks: [
            {
                idBlock: "block_1",
                fromDay: "Today",
                fromLikes: "128",
                fromComments: "31",
                toDay: "09-08-2016",
                toLikes: "67",
                toComments: "22",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_2",
                fromDay: "Today",
                fromLikes: "12,800",
                fromComments: "3,100",
                toDay: "09-08-2016",
                toLikes: "67",
                toComments: "22",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_3",
                fromDay: "Today",
                fromLikes: "327",
                fromComments: "945",
                toDay: "09-08-2016",
                toLikes: "78",
                toComments: "96",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_4",
                fromDay: "Today",
                fromLikes: "684",
                fromComments: "153",
                toDay: "09-08-2016",
                toLikes: "37",
                toComments: "12",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_5",
                fromDay: "Today",
                fromLikes: "358",
                fromComments: "657",
                toDay: "09-08-2016",
                toLikes: "78",
                toComments: "12",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_6",
                fromDay: "Today",
                fromLikes: "429",
                fromComments: "943",
                toDay: "09-08-2016",
                toLikes: "37",
                toComments: "43",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_7",
                fromDay: "Today",
                fromLikes: "451",
                fromComments: "951",
                toDay: "09-08-2016",
                toLikes: "83",
                toComments: "49",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_8",
                fromDay: "Today",
                fromLikes: "789",
                fromComments: "147",
                toDay: "09-08-2016",
                toLikes: "58",
                toComments: "36",
                imageUpload: '11-04-2016'
            },
            {
                idBlock: "block_9",
                fromDay: "Today",
                fromLikes: "89",
                fromComments: "19",
                toDay: "09-08-2016",
                toLikes: "82",
                toComments: "64",
                imageUpload: '11-04-2016'
            }
        ]
    }

    makeList() {
        const blocks = this.state.blocks;

        const items = blocks.map((block) =>
            <li className="block" id={block.idBlock}>

                <div className="from">
                    <p className="fromDay">{block.fromDay}</p>
                    <p className="fromLikes"><p></p>{block.fromLikes}</p>
                    <p className="fromComments"><p></p>{block.fromComments}</p>
                </div>

                <div className="to">
                    <p className="toDay">{block.toDay}</p>
                    <p className="toLikes"><p></p>{block.toLikes}</p>
                    <p className="toComments"><p></p>{block.toComments}</p>
                </div>

                <div className="imageUpload">Image upload: {block.imageUpload}</div>

            </li>
        )

        return items
    }

    render() {
        return (
            <div className="blockContainer">

                <ul className="blocks">
                    {this.makeList()}
                </ul>

            </div>
        );
    }
}

export default Main

// todo Фон блока Главное
// todo эффекты при наведении на блок и его иконки
// todo блок для видео
// todo Какие есть варианты вынесения кода блока в отдельный компонент?
// todo Кнопка внизу
// todo Дейтпикер
// todo Адаптивным сделать
// todo Удалить все неиспользуемые файлы и строки