import React from "react";
import {ActionTypes, MessagesPageType} from "../../Redax/store";
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redax/messages-reducer";
import {Messages} from "./Messages";
import {StoreContext} from "../../StoreContext";

/*type MessagesPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionTypes) => void
}*/

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