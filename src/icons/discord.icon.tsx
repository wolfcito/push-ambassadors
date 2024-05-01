export function DiscordIcon({ classname }: { readonly classname: string }) {
  return (
    <svg
      width="40"
      height="28"
      viewBox="0 0 40 28"
      fill="none"
      className={classname}
    >
      <path
        d="M33.331 2.327A32.58 32.58 0 0 0 25.45 0c-.372.64-.709 1.296-1.01 1.97a30.673 30.673 0 0 0-8.746 0c-.301-.674-.638-1.33-1.01-1.97a32.94 32.94 0 0 0-7.887 2.333C1.809 9.413.457 16.319 1.133 23.126a32.275 32.275 0 0 0 9.666 4.657 22.328 22.328 0 0 0 2.07-3.203 20.92 20.92 0 0 1-3.26-1.494c.274-.19.541-.386.8-.576a23.508 23.508 0 0 0 9.662 2.071c3.341 0 6.64-.707 9.663-2.072.262.205.53.401.8.577a20.863 20.863 0 0 1-3.266 1.497 22.041 22.041 0 0 0 2.07 3.2 32.13 32.13 0 0 0 9.672-4.654c.793-7.894-1.355-14.736-5.679-20.802ZM13.726 18.94c-1.884 0-3.44-1.64-3.44-3.659 0-2.018 1.502-3.673 3.434-3.673 1.932 0 3.476 1.655 3.443 3.673-.033 2.018-1.517 3.659-3.437 3.659Zm12.691 0c-1.887 0-3.437-1.64-3.437-3.659 0-2.018 1.502-3.673 3.437-3.673 1.935 0 3.468 1.655 3.435 3.673-.033 2.018-1.515 3.659-3.435 3.659Z"
        fill={classname ?? '#fff'}
      ></path>
    </svg>
  )
}