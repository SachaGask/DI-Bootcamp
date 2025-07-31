
const reactionEmmoji = {
    thumbsUp: '👍',
    thumbsDown: '👎',
    heart: '❤️',
    clap: '👏'
}

import { useDispatch } from 'react-redux';
import { reactionAdded } from './slice';

export default function ReactionButton({ reactions, postId }) {
    const dispatch = useDispatch();
    const renderReactions = Object.entries(reactionEmmoji).map(([key, emoji]) => {
        const count = reactions ? reactions[key] : 0;
        return (
            <button
                key={key}
                className="reactionButton"
                style={{ marginRight: 8 }}
                onClick={() => dispatch(reactionAdded({ postId, reaction: key }))}
            >
                {emoji} {count}
            </button>
        );
    });

    return (
        <div style={{ borderRadius: 5 }}>
            {renderReactions}
        </div>
    );
}