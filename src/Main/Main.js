import React, {Component} from 'react'
import './Main.css'
import Block from './Block/Block'

class Main extends Component {
    state = {
        blocks: [
            {
                fromDay: "Today",
                fromLikes: "128",
                fromComments: "31",
                toDay: "09-08-2016",
                toLikes: "67",
                toComments: "22",
                imageUpload: '11-04-2016',

                img: "./Block/img/block_1.jpg"
            }
        ]
    }

    makeList() {
        const blocks = this.state.blocks;

        const items = blocks.map((block) =>
            <li className="block">

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
            <ul>
                {this.makeList()}
            </ul>
        );
    }
}

export default Main