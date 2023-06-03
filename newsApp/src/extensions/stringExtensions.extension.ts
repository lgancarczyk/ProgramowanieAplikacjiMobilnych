export {}

declare global {
   interface String {
      shorten(noLetters: number): string;
   }
}

String.prototype.shorten = function (this : string, noLetters: number): string {
   if (!noLetters) return this;
   let string = this;
   if (string.trim().length <= noLetters) {
      return this;
   }
   var trimmedString = string.substring(0, noLetters) + "...";

   return trimmedString;
};