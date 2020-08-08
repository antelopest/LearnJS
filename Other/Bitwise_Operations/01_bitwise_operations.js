/*
  Побитовые операторы

  url: https://learn.javascript.ru/bitwise-operators

  Побитовые операторы интерпретируют операнды как последовательность из 32 битов (нулей и единиц).

  Они производят операции, используя двоичное представление числа, и возвращают новую последовательность
  из 32 бит (число) в качестве результата.

  Побитовые операторы в JS работают с 32-битными целыми числами в их двоичном представлении.
  Это представление называется "32-битное целое со знаком, старшим битов слева и дополнением до двойки"

  *
  Старший бит слева - это научное название для самого обычного порядка записи цифр (от большего разряда к
  меньшему).
  При этом, если больший разряд отсутствует, то соответствующий бит равен нулю.

  a = 0;  // 00000000000000000000000000000000
  a = 1;  // 00000000000000000000000000000001
  a = 2;  // 00000000000000000000000000000010
  a = 3;  // 00000000000000000000000000000011
  a = 255;// 00000000000000000000000011111111

  Каждое число состоит ровно из 32-битов

  *
  Дополнение до двойки - это название способа поддержки отрицательных чисел.

  Двоичный вид числа, обратный данному (например, 5 и -5) получается путем обращения всех битов с прибавлением 1.

  Пример число:
  314 = 00000000000000000000000100111010
  -314 = 11111111111111111111111011000101

  Чтобы превратить 314 в -314:
  1. Обратить биты числа: Заменить 0 на 1, а 1 на 0;
  2. К полученному двоичному числу прибавить единицу, обычным двоичным сложением.

  314 => -314
  1. 00000000000000000000000100111010 => 11111111111111111111111011000101
  2. 11111111111111111111111011000101 + 1 => 11111111111111111111111011000110

  Принцип дополнения до двойки делит все двоичные представления на два множества:
  Если крайний-левый бит равен:
  0 - число положительное, 1 - число отрицательное

  Поэтому этот бит называется знаковым битом.

*/

/*
  Операторы:
  Побитовое И (AND): a & b
	Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.

	Побитовое ИЛИ (OR): a | b
	Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.

  Побитовое исключающее ИЛИ (XOR): a ^ b
  Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).

  Побитовое НЕ (NOT): ~a
  Заменяет каждый бит операнда на противоположный.

  Левый сдвиг: a << b
  Сдвигает двоичное представление a на b битов влево, добавляя справа нули.

  Правый сдвиг: a >> b
  Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.

  Правый сдвиг с заполнением нулями: a >>> b
  Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.

  Побитовые операторы работают следующим образом:
  * Операнды преобразуются в 32-битные целые числа, представленные последовательностью битов. Дробная часть, если она есть, отбрасывается.
  * Для бинарных операторов – каждый бит в первом операнде рассматривается вместе с соответствующим битом второго операнда: первый бит с первым, второй со вторым и т.п. Оператор применяется к каждой паре бит, давая соответствующий бит результата.
  * Получившаяся в результате последовательность бит интерпретируется как обычное число.

  Вспомогательные функции:
  parseInt("11000", 2) - переводит строку с двоичной записью числа в число

  n.toString(2) - получает для числа n запись в 2-ой системе счисления в виде строки
*/
