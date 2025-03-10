const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Flash,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnFall,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Tilemap: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{collisionBox: 0},
	{Flash: 0},
	{playerAnims: 0},
	{state: 0},
	{enemy: 0},
	{Keyboard: 0},
	{ledge: 0},
	{Sine: 0},
	{Sprite: 0},
	{Text: 0},
	{txtScore: 0},
	{scoore: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	collisionBox: class extends self.ISpriteInstance {},
	playerAnims: class extends self.ISpriteInstance {},
	enemy: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	ledge: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	txtScore: class extends self.ITextInstance {}
}