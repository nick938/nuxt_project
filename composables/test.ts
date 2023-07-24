export const useCounter = () => useState<number>('counter', () => 1)
export const useColor = () => useState<string>('color', () => 'pink')
