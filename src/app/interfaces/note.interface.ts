export interface INote {
    title: String,
    content: String,
    category: 'Personal' | 'Work' | 'Study' | 'Other',
    pinned: Boolean
}