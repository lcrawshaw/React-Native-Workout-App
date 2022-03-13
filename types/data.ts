export type Difficulty = "easy" | "normal" | "hard"

export type SequenceType = "stretch" | "exercise" | "break"

export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulty
    sequence: SequenceItem[]
}

export interface SequenceItem {
    slug: string,
    name: string,
    duration: number,
    type: SequenceType,
    reps?: number
}