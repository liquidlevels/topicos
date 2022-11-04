import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:app/constants/constants.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.amber,
        body: SafeArea(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const CircleAvatar(
                  radius: 100,
                  backgroundImage: AssetImage('assets/images/malacardo.png'),
                ),
                const Text('@liquidlevels',
                    style: TextStyle(
                        fontSize: 30,
                        color: Colors.black,
                        fontFamily: 'Poor Story')),
                const Text('Minecraft player since 2013',
                    style: TextStyle(
                        fontSize: 16,
                        color: Colors.black,
                        fontFamily: 'Monocraft')),
                const Card(
                    color: Colors.black,
                    child: ListTile(
                      leading: Icon(Icons.mail, color: Colors.amber),
                      title: Text(
                        'liquid@me.com',
                        style: TextStyle(color: Colors.white),
                      ),
                      subtitle: Text(
                        'mail',
                        style: TextStyle(color: Colors.white),
                      ),
                      trailing: Icon(
                        Icons.arrow_forward_ios,
                        color: Colors.amber,
                      ),
                    )),
                cartaPersonalizada('liquidlevels was here', Icons.abc, 'uwu'),
                cartaPersonalizada(
                    'ding dong', Icons.access_alarm, 'levantate prro')
              ],
            ),
          ),
        ));
  }

  Card cartaPersonalizada(String data, IconData icon, String subtitle) {
    return Card(
        // margin: EdgeInsets.only(top: 10),
        // padding: const EdgeInsets.all(6),
        // height: 50,
        // width: 300,
        color: Colors.black,
        child: ListTile(
          leading: Icon(icon, color: Colors.amber),
          title: Text(data, style: const TextStyle(color: Colors.white)),
          subtitle: Text(subtitle, style: const TextStyle(color: Colors.white)),
          trailing: const Icon(
            Icons.arrow_forward_ios,
            color: Colors.amber,
          ),
        ));
  }
}
