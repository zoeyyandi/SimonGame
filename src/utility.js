const sounds = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", 
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
]

export const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
} 

export const playSound = (num = generateNumber(1, 4)) => {
  let audio = new Audio(sounds[num])
  console.log(audio)
  audio.play()
}
