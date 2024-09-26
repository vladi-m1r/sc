export function formatTimeAgo(inputDate: string | number | Date): string {
  const date = new Date(inputDate)
  const currentDate = new Date()

  const timeDifference = currentDate.getTime() - date.getTime()
  const secondsDifference = Math.floor(timeDifference / 1000)
  const minutesDifference = Math.floor(secondsDifference / 60)
  const hoursDifference = Math.floor(minutesDifference / 60)
  const daysDifference = Math.floor(hoursDifference / 24)

  if (secondsDifference < 60) {
    return "just now"
  } else if (minutesDifference < 60) {
    return `${minutesDifference}m ago`
  } else if (hoursDifference < 24) {
    return `${hoursDifference}h ago`
  } else if (daysDifference < 7) {
    return `${daysDifference}d ago`
  } else if (daysDifference < 30) {
    const weeksDifference = Math.floor(daysDifference / 7)
    return `${weeksDifference}w ago`
  } else if (daysDifference < 365) {
    const monthsDifference = Math.floor(daysDifference / 30)
    return `${monthsDifference}mo ago`
  } else {
    const yearsDifference = Math.floor(daysDifference / 365)
    return `${yearsDifference}yr ago`
  }
}

export function formatDate(inputDate: string | number | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = new Date(inputDate).toLocaleDateString(
    undefined,
    options
  )
  return formattedDate
}

export function formatDateTimeFull(inputDate: string | number | Date): string {
  const formattedDate = formatDate(inputDate)
  const timeAgo = formatTimeAgo(inputDate)
  return `${formattedDate} (${timeAgo})`
}
