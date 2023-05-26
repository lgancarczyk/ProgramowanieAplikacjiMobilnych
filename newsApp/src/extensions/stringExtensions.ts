export {}

declare global {
   interface String {
      shorten(noLetters: number): string;
   }
}

String.prototype.shorten = function (noLetters: number): string {
   if (!noLetters) return this;
   let string = this;
   var trimmedString = string.substring(0, noLetters) + "...";

   return trimmedString;
};