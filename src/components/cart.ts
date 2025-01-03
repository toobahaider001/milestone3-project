import { create } from "zustand";

interface Habit{
    id:string,
    title:string,
    price:string
}
interface HabitState{
    habits: Habit[],
    setHabit:()=>any
}
const useHabitStore =create<HabitState>(()=>{
    return {
        habits: [],
        setHabit: () => {

        }
    }
})
export default useHabitStore
