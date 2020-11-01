import ProfileReducer, {AddPostActionCreator, UpdateNewPostTextActionCreator} from "./Profile-Reducer";
import DialogsReducer, {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "./Dialogs-Reducer";
import SitebarReducer from "./Sitebar-Reducer";
import {
    ChangeCurrentPageAC,
    FollowAC,
    SetTotalCountAC,
    SetUsersAC,
    ToggleIsFetchingAC,
    UnfollowAC
} from "./Users-Reducer";

export type MessageType = {
    id: number
    message: string
}

type UncheckedMessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    photo: string
}

type UncheckedDialogType = {
    id: number
    name: string
    photo: string
}

export type PostType = {
    id: number
    message: string
    likes: number
}

export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    uncheckedDialogs: Array<UncheckedDialogType>
    uncheckedMessages: Array<UncheckedMessageType>
}

export type SitebarElementType = {
    id: number
    name: string
}

export type RootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sitebar: Array<SitebarElementType>
}

 export type ActionsTypes = ReturnType<typeof AddPostActionCreator> |
     ReturnType<typeof UpdateNewPostTextActionCreator> |
     ReturnType<typeof AddMessageActionCreator> |
     ReturnType<typeof UpdateNewMessageTextActionCreator> |
     ReturnType<typeof FollowAC> |
     ReturnType<typeof UnfollowAC> |
     ReturnType<typeof SetUsersAC> |
     ReturnType<typeof ChangeCurrentPageAC> |
     ReturnType<typeof SetTotalCountAC> |
     ReturnType<typeof ToggleIsFetchingAC>


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
}

export type ReduxStoreType = {
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    subscribe: (callback: () => void) => void
}

//=======================================

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

//=======================================

export let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Skril", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"},
                {id: 2, name: "Banan", photo: "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"},
                {id: 3, name: "Ej", photo: "https://klike.net/uploads/posts/2019-03/medium/1551515289_11.jpg"},
                {id: 4, name: "Zviazko", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512890_12.jpg"},
                {
                    id: 5, name: "Yus", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512905_15.jpg"
                },
            ],
            uncheckedDialogs: [
                {id: 1, name: "Sasha", photo: "https://klike.net/uploads/posts/2019-03/1551512897_16.jpg"},
                {id: 2, name: "Masha", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512911_25.jpg"},
                {id: 3, name: "Vlad", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512926_36.jpg"},
                {id: 4, name: "Miha", photo: "https://klike.net/uploads/posts/2019-03/1551512878_44.jpg"},
                {
                    id: 5, name: "Chort", photo: "https://klike.net/uploads/posts/2019-03/1551512969_49.jpg"
                },
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Buhai!"},
                {id: 3, message: "Otdihai!"}
            ],
            newMessageText: "React way of SAMURAI",
            uncheckedMessages: [
                {id: 1, message: "Yo!"},
                {id: 2, message: "Ege-ge!"},
                {id: 3, message: "Hello!"}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: "hi", likes: 15},
                {id: 2, message: "Hello!", likes: 20},
                {id: 3, message: "Harry Crishna!", likes: 25}
            ],
            newPostText: 'React way of SAMURAI'
        },
        sitebar: [
            {id: 1, name: 'Masha'},
            {id: 2, name: 'Glasha'},
            {id: 3, name: 'Natasha'},
        ]
    },

    getState() {
        return this._state
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = SitebarReducer(this._state.sitebar, action)

        this._callSubscriber()
    },

//---------

    _callSubscriber() {
        console.log('Hello');
    },

    subscribe(callback:any) {
        this._callSubscriber = callback
    }
}

//=========================================





