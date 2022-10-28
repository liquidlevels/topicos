import 'package:flutter/material.dart';
import 'package:app/constants/constants.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    const List<String> frutas = [
      'Manzana',
      'Platano',
      'Aguacate',
      'Uva',
      'Naranja',
      'Melon'
    ];

    const List<IconData> iconos = [
      Icons.abc,
      Icons.nat,
      Icons.mail,
      Icons.zoom_in_map,
      Icons.games,
      Icons.label
    ];

    const List<AssetImage> testIcons = [
      AssetImage('assets/icons/bananas.png'),
      AssetImage('assets/icons/grapes.png'),
      AssetImage('assets/icons/lemon.png'),
      AssetImage('assets/icons/orange.png'),
      AssetImage('assets/icons/strawberry.png'),
      AssetImage('assets/icons/watermelon.png')
    ];

    return Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: ListView.builder(
              itemCount: frutas.length,
              itemBuilder: ((context, index) {
                return Container(
                    margin: const EdgeInsets.all(10),
                    padding: const EdgeInsets.all(10),
                    color: kSecondaryColor,
                    width: double.infinity,
                    height: 50,
                    child: Row(children: [
                      Icon(iconos[index]),
                      Text(
                        frutas[index],
                        style: kTextStyleFruitsText,
                        textAlign: TextAlign.center,
                      )
                    ]));
              })),
        ));
  }
}
