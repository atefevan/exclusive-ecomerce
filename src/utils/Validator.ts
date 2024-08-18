export interface ValidatorProps {
  status: boolean;
  message: string;
}
export const validEmail = (data: string): ValidatorProps => {
  /// Regex Setup
  const vaildEmailRegex: RegExp =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const condition: boolean = !vaildEmailRegex.test(data);

  if (!data?.length) return { status: true, message: "" };

  return {
    status: condition,
    message: condition ? "Enter a valid Email Address" : "",
  };
};
