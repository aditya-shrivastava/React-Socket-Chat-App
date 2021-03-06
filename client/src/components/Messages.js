import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Messages = ({ messages, name }) => {
	return (
		<ScrollToBottom className='pt-5 pr-5 overflow-auto flex-auto'>
			{messages.map((message, i) => (
				<div key={i}>
					<Message message={message} name={name} />
				</div>
			))}
		</ScrollToBottom>
	);
};

export default Messages;
