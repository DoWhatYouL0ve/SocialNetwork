import React from "react";
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redax/messages-reducer";
import {Messages} from "./Messages";
import {StoreContext} from "../../StoreContext";


export const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
            let onSendMessageClick = () => {
                store.dispatch(sentMessageActionCreator())
            }
            let onNewMessageChange = (text: string) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }

            return <Messages onNewMessageChange={onNewMessageChange}
                             onSendMessageClick={onSendMessageClick}
                             messagesPage={store.getState().messagesPage}
            />
        }
        }
        </StoreContext.Consumer>
    )
}